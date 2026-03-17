import { useState, useEffect } from 'react';
import hatIcon from '../../assets/hat.png';
import './QuizScreen.css';

export default function QuizScreen({ onComplete, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // fetch('/api/assessment/beta-1')
      fetch('http://localhost:3001/api/assessment/beta-1')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading questions:', err);
        setLoading(false);
      });
  }, []);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = (optionKey) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionKey
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/assessment/beta-1/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
      const results = await response.json();
      onComplete(results);
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Error al enviar respuestas. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="quiz-screen">
        <div className="quiz-container">
          <div className="quiz-loading">
            <img src={hatIcon} alt="Sorting Hat" className="quiz-hat-icon" />
            <h2 className="quiz-loading-text">Loading the Sorting Hat...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="quiz-screen">
        <div className="quiz-container">
          <div className="quiz-error">
            <p className="quiz-error-text">Error loading questions</p>
            <button type="button" onClick={onBack} className="quiz-btn quiz-btn-secondary">
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="quiz-screen">
      <div className="quiz-container">
        
        {/* Header with Hat Icon */}
        <header className="quiz-header">
          <img src={hatIcon} alt="Sorting Hat" className="quiz-hat-icon" />
          <p className="quiz-subtitle">Discover your perfect tech career path</p>
        </header>

        {/* Progress Bar */}
        <div className="quiz-progress-container">
          <div className="quiz-progress-bar">
            <div 
              className="quiz-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="quiz-progress-text">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="quiz-question-container">
          <span className="quiz-question-tag">
            {currentQuestion.type === 'technical' ? 'Technical' : 'Preference'} Question
          </span>
          <h2 className="quiz-question-text">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Options */}
        <div className="quiz-options">
          {currentQuestion.options.map(option => (
            <button
              key={option.key}
              type="button"
              onClick={() => handleAnswer(option.key)}
              className={`quiz-option ${currentAnswer === option.key ? 'quiz-option-selected' : ''}`}
            >
              <span className="quiz-option-text">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="quiz-navigation">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="quiz-btn quiz-btn-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="quiz-btn-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Previous
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!currentAnswer || submitting}
              className="quiz-btn quiz-btn-primary"
            >
              {submitting ? 'Submitting...' : 'Submit & Get Results'}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="quiz-btn-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={!currentAnswer}
              className="quiz-btn quiz-btn-primary"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="quiz-btn-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}