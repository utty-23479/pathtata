import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ScoringService {
  constructor() {
    const quizPath = join(__dirname, '../data/quiz.json');
    this.quiz = JSON.parse(readFileSync(quizPath, 'utf8'));
  }

  getQuestions() {
    const orderedQuestions = this.quiz.question_order.map(id => {
      const question = this.quiz.questions.find(q => q.id === id);
      if (!question) return null;
      
      const { correct, ...questionWithoutAnswer } = question;
      return questionWithoutAnswer;
    }).filter(q => q !== null);

    return {
      questions: orderedQuestions,
      product: this.quiz.product,
      version: this.quiz.version
    };
  }

  calculateResults(answers) {
    const technicalScore = this.calculateTechnicalScore(answers);
    const technicalLevel = this.getTechnicalLevel(technicalScore.normalized);
    const confidence = this.calculateConfidence(answers);
    const pathRecommendation = this.calculatePathRecommendation(answers, technicalScore.normalized);

    return {
      technical: {
        raw_score: technicalScore.raw,
        normalized_score: technicalScore.normalized,
        level: technicalLevel,
        confidence: confidence
      },
      recommended_path: pathRecommendation,
      product: this.quiz.product,
      version: this.quiz.version
    };
  }

  calculateTechnicalScore(answers) {
    const model = this.quiz.scoring_model.technical;
    const technicalQuestions = this.quiz.questions.filter(q => q.type === 'technical');
    
    let rawScore = 0;

    technicalQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      if (!userAnswer) return;

      if (userAnswer === question.correct) {
        rawScore += model.points.correct;
      } else if (userAnswer === model.not_sure_option_key) {
        rawScore += model.points.not_sure;
      } else {
        rawScore += model.points.incorrect;
      }
    });

    const { raw_min, raw_max } = model.normalize;
    const normalized = ((rawScore - raw_min) / (raw_max - raw_min)) * 100;
    const normalizedClamped = Math.max(0, Math.min(100, normalized));

    return {
      raw: rawScore,
      normalized: normalizedClamped
    };
  }

  getTechnicalLevel(normalizedScore) {
    const levels = this.quiz.scoring_model.technical.levels;
    
    for (const level of levels) {
      if (normalizedScore >= level.min && normalizedScore <= level.max) {
        return {
          id: level.id,
          technical_name: level.technical_name,
          gamified: level.gamified
        };
      }
    }

    return levels[0];
  }

  calculateConfidence(answers) {
    const model = this.quiz.scoring_model.technical;
    const technicalQuestions = this.quiz.questions.filter(q => q.type === 'technical');
    
    let notSureCount = 0;
    technicalQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer === model.not_sure_option_key) {
        notSureCount++;
      }
    });

    const confidenceValue = 1 - (notSureCount / technicalQuestions.length);
    
    const labels = model.confidence.labels;
    for (const label of labels) {
      if (confidenceValue >= label.min) {
        return {
          value: confidenceValue,
          label: label.name
        };
      }
    }

    return {
      value: confidenceValue,
      label: 'Low'
    };
  }

  calculatePathRecommendation(answers, technicalScore) {
    const gating = this.quiz.scoring_model.paths.gating;
    
    if (technicalScore < gating.foundations_if_technical_score_below) {
      return {
        path: 'Foundations / Exploratory',
        score: 1.0,
        reason: 'Based on your technical assessment level'
      };
    }

    const pathScores = {};
    const availablePaths = this.quiz.scoring_model.paths.available;
    
    availablePaths.forEach(path => {
      if (path !== 'Foundations / Exploratory') {
        pathScores[path] = 0;
      }
    });

    const nonTechnicalQuestions = this.quiz.questions.filter(q => q.type === 'non_technical');
    
    nonTechnicalQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      if (!userAnswer) return;

      const mapping = this.quiz.preference_mapping[question.id];
      if (!mapping || !mapping[userAnswer]) return;

      const pathWeights = mapping[userAnswer];
      Object.keys(pathWeights).forEach(path => {
        if (pathScores[path] !== undefined) {
          pathScores[path] += pathWeights[path];
        }
      });
    });

    let recommendedPath = null;
    let maxScore = -1;

    Object.keys(pathScores).forEach(path => {
      if (pathScores[path] > maxScore) {
        maxScore = pathScores[path];
        recommendedPath = path;
      }
    });

    return {
      path: recommendedPath || 'Fullstack / Backend',
      score: maxScore,
      all_scores: pathScores,
      reason: 'Based on your preferences and technical level'
    };
  }
}

export default ScoringService;