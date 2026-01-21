import express from 'express';
import ScoringService from '../services/scoringService.js';

const router = express.Router();
const scoringService = new ScoringService();

router.get('/beta-1', (req, res) => {
  try {
    const questions = scoringService.getQuestions();
    res.json(questions);
  } catch (error) {
    console.error('Error loading questions:', error);
    res.status(500).json({ error: 'Failed to load assessment' });
  }
});

router.post('/beta-1/submit', (req, res) => {
  try {
    const { answers } = req.body;
    
    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ error: 'Invalid answers format' });
    }

    const results = scoringService.calculateResults(answers);
    res.json(results);
  } catch (error) {
    console.error('Error calculating results:', error);
    res.status(500).json({ error: 'Failed to calculate results' });
  }
});

export default router;