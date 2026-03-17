import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hatIcon from '../../assets/hat.png';
import WelcomeScreen from '../../components/SortingHat/WelcomeScreen';
import PathSelectionScreen from '../../components/SortingHat/PathSelectionScreen';
import QuizScreen from '../../components/SortingHat/QuizScreen';
import ResultsScreen from '../../components/SortingHat/ResultsScreen';
import './SortingHat.css';

export default function SortingHat() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState('welcome');
  const [results, setResults] = useState(null);

  const handleStartQuiz = () => setScreen('quiz');
  
  const handleShowPathSelection = () => {
    setScreen('path-selection');
  };
  
  const handleShowResults = (data) => {
    setResults(data);
    setScreen('results');
  };
  
  const handleRestart = () => {
    setScreen('welcome');
    setResults(null);
  };

  return (
    <div className="sorting-hat-page">
      <header className="sorting-hat-header">
        <div className="sorting-hat-header-content">
          <img src={hatIcon} alt="Sorting Hat" className="sorting-hat-logo" />
          <div className="sorting-hat-header-text">
            <h1 className="sorting-hat-title">PATHTA Sorting Hat</h1>
            <p className="sorting-hat-subtitle">Discover your perfect tech career path</p>
          </div>
        </div>
      </header>

      <div className="sorting-hat-content">
        <div className="sorting-hat-container">
          {screen === 'welcome' && (
            <WelcomeScreen 
              onStartQuiz={handleStartQuiz}
              onSkipToDashboard={handleShowPathSelection}
            />
          )}

          {screen === 'path-selection' && (
            <PathSelectionScreen 
              onStartQuiz={handleStartQuiz}
            />
          )}
          
          {screen === 'quiz' && (
            <QuizScreen 
              onComplete={handleShowResults}
              onBack={handleRestart}
            />
          )}
          
          {screen === 'results' && (
            <ResultsScreen 
              results={results}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
}