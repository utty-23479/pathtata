import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PathSelectionScreen.css';

const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M4 6h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6z" />
    <path d="M16 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    <path d="M6 1c2 0 3 1 3 3M10 1c2 0 3 1 3 3M14 1c2 0 3 1 3 3" />
    <path d="M6 22h8" />
  </svg>
);

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.84 6.72 2.28"/>
    <path d="M21 3v9h-9"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M12 2C6.5 2 6 4 6 5.5V8h6v1H5C3 9 2 10.5 2 13s1 4 3 4h2v-2.5C7 12.5 8 11 10 11h4c2 0 3-1 3-3V5.5C17 4 16.5 2 12 2z" />
    <path d="M12 22c5.5 0 6-2 6-3.5V16h-6v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v2.5c0 2-1 3.5-3 3.5h-4c-2 0-3 1-3 3v2.5c0 1.5.5 3.5 5 3.5z" />
    <circle cx="9" cy="5.5" r="0.5" fill="currentColor" />
    <circle cx="15" cy="18.5" r="0.5" fill="currentColor" />
  </svg>
);

const DataIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const paths = [
  {
    id: 'fullstack-java',
    name: 'Full Stack Java',
    description: 'Build enterprise applications with Java, Spring Boot, and modern frontend frameworks',
    icon: JavaIcon
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Master CI/CD pipelines, infrastructure as code, and cloud deployment',
    icon: DevOpsIcon
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Develop versatile applications from web backends to automation scripts',
    icon: PythonIcon
  },
  {
    id: 'data-engineer',
    name: 'Data Engineer',
    description: 'Design and build data pipelines, warehouses, and analytics platforms',
    icon: DataIcon
  },
  {
    id: 'gcp',
    name: 'GCP',
    description: 'Become an expert in Google Cloud Platform services and architecture',
    icon: CloudIcon
  }
];

const PathSelectionScreen = ({ onStartQuiz }) => {
  const navigate = useNavigate();

  const handleSelectPath = (pathId) => {
    navigate('/dashboard', { state: { selectedPath: pathId } });
  };

  return (
    <div className="path-selection-screen">
      <div className="path-selection-container">
    
        {/* Main Content */}
        <main className="path-selection-main-content">
          <h2 className="path-selection-main-title">Choose Your Path</h2>
          <p className="path-selection-main-subtitle">
            Select the technology path that aligns with your career goals
          </p>
        </main>

        {/* Path Options */}
        <div className="path-selection-options">
          {paths.map((path) => {
            const IconComponent = path.icon;
            return (
              <button
                key={path.id}
                type="button"
                className="path-option-card"
                onClick={() => handleSelectPath(path.id)}
              >
                <span className="path-option-icon">
                  <IconComponent />
                </span>
                <h3 className="path-option-title">{path.name}</h3>
                <p className="path-option-description">{path.description}</p>
              </button>
            );
          })}

          {/* Quiz Option */}
          <button
            type="button"
            className="path-option-card path-option-card-quiz"
            onClick={onStartQuiz}
          >
            <span className="path-option-icon path-option-icon-quiz">
              <SparklesIcon />
            </span>
            <h3 className="path-option-title">Not sure yet?</h3>
            <p className="path-option-description">
              Let the Sorting Hat guide you to your ideal path
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathSelectionScreen;