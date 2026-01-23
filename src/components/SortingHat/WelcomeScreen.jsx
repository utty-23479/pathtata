import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStartQuiz, onSkipToDashboard }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-container">
    
        {/* Main Content */}
        <main className="welcome-main-content">
          <h2 className="welcome-main-title">How would you like to begin your journey?</h2>
          <p className="welcome-main-subtitle">
            Choose the path that fits you best — the hat will help either way.
          </p>
        </main>

        {/* Options */}
        <div className="welcome-options">
          <button
            type="button"
            className="welcome-option-card"
            onClick={onSkipToDashboard}
          >
            <span className="welcome-option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </span>
            <h3 className="welcome-option-title">I already know my strengths</h3>
            <p className="welcome-option-description">
              Explore technology paths directly
            </p>
          </button>

          <button
            type="button"
            className="welcome-option-card"
            onClick={onStartQuiz}
          >
            <span className="welcome-option-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </span>
            <h3 className="welcome-option-title">Let the Sorting Hat guide me</h3>
            <p className="welcome-option-description">
              Discover your best path through a short assessment
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;