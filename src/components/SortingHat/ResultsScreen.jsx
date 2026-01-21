import { useNavigate } from 'react-router-dom';
import './ResultsScreen.css';

// Badge Icons
const ChessPawnIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a3 3 0 0 0-3 3c0 1.1.6 2.1 1.5 2.6L9 12h6l-1.5-4.4c.9-.5 1.5-1.5 1.5-2.6a3 3 0 0 0-3-3Z"/>
    <path d="M6 22h12"/>
    <path d="M8 22v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <path d="M9 12v2a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-2"/>
  </svg>
);

const ChessKnightIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a1 1 0 0 0-1 1 1 1 0 0 0 .5.87L8 9l-1.5-1.5A2 2 0 0 0 5 8a2 2 0 0 0-.35.03l.07.07L3 10l2.5 2.5L5 14H4a1 1 0 0 0-1 1 1 1 0 0 0 .29.71l.33.33A2 2 0 0 0 5 17h2.5"/>
    <path d="M17 17H7.5l.67-1a8 8 0 0 0 1.33-4v-1l2.5-3 1.5 1.5L15 8a2 2 0 0 0 1.5.65A2 2 0 0 0 18 8"/>
    <path d="m13 5.5.5-.5a1 1 0 0 1 1 0l.5.5v1.5"/>
    <circle cx="10" cy="9" r=".5"/>
    <path d="M6 22h12"/>
    <path d="M7 22v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>
  </svg>
);

const ChessQueenIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="6" cy="4" r="1"/>
    <circle cx="12" cy="3" r="1"/>
    <circle cx="18" cy="4" r="1"/>
    <path d="m6 5 .5 7.5L4 17h16l-2.5-4.5L18 5"/>
    <path d="m12 4 .5 8.5"/>
    <path d="M6 22h12"/>
    <path d="M7 22v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>
  </svg>
);

const getBadgeIcon = (levelName) => {
  const name = levelName?.toLowerCase() || '';
  if (name.includes('explorer')) return <ChessPawnIcon className="results-badge-icon" />;
  if (name.includes('apprentice')) return <ChessKnightIcon className="results-badge-icon" />;
  if (name.includes('seeker')) return <ChessQueenIcon className="results-badge-icon" />;
  return <ChessPawnIcon className="results-badge-icon" />;
};

// Path Icons
const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M4 6h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6z" />
    <path d="M16 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    <path d="M6 1c2 0 3 1 3 3M10 1c2 0 3 1 3 3M14 1c2 0 3 1 3 3" />
    <path d="M6 22h8" />
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"/>
    <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"/>
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"/>
    <circle cx="8" cy="6" r=".5" fill="currentColor"/>
    <circle cx="16" cy="18" r=".5" fill="currentColor"/>
  </svg>
);

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.84 6.72 2.28"/>
    <path d="M21 3v9h-9"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const DataIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="path-option-svg">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
    <path d="M3 12A9 3 0 0 0 21 12"/>
  </svg>
);

const paths = [
  { id: 'fullstack-java', name: 'Full Stack Java', icon: JavaIcon, description: 'Build complete web applications with Java' },
  { id: 'python', name: 'Python', icon: PythonIcon, description: 'Master Python for versatile development' },
  { id: 'devops', name: 'DevOps', icon: DevOpsIcon, description: 'Automate and streamline deployments' },
  { id: 'gcp', name: 'GCP', icon: CloudIcon, description: 'Cloud solutions with Google Cloud' },
  { id: 'data-engineer', name: 'Data Engineer', icon: DataIcon, description: 'Build data pipelines and analytics' },
];

const getRecommendedPath = (recommendedPathName) => {
  const recommendedLower = recommendedPathName?.toLowerCase() || '';
  
  if (recommendedLower.includes('java') || recommendedLower.includes('full stack')) {
    return paths.find(p => p.id === 'fullstack-java');
  }
  if (recommendedLower.includes('python')) {
    return paths.find(p => p.id === 'python');
  }
  if (recommendedLower.includes('devops')) {
    return paths.find(p => p.id === 'devops');
  }
  if (recommendedLower.includes('gcp') || recommendedLower.includes('google')) {
    return paths.find(p => p.id === 'gcp');
  }
  if (recommendedLower.includes('data')) {
    return paths.find(p => p.id === 'data-engineer');
  }
  return paths[0];
};

export default function ResultsScreen({ results }) {
  const navigate = useNavigate();
  const { technical, recommended_path } = results;

  const recommendedPath = getRecommendedPath(recommended_path.path);
  const otherPaths = paths.filter(p => p.id !== recommendedPath.id);

  const handleSelectPath = (pathId) => {
    navigate('/dashboard', { state: { selectedPath: pathId } });
  };

  const RecommendedIcon = recommendedPath.icon;

  return (
    <div className="results-screen">
      
      {/* Header */}
      <header className="results-header">
        <h1 className="results-title">Your Results Are In!</h1>
        <p className="results-subtitle">Discover your tech path based on your assessment</p>
      </header>

      {/* Recommended Path - Todo en un solo botón */}
      <div className="recommended-path-section">
        <button
          type="button"
          onClick={() => handleSelectPath(recommendedPath.id)}
          className="recommended-path-card"
        >
          {/* Badge Info */}
          <div className="recommended-badge-info">
            {getBadgeIcon(technical.level.gamified.name)}
            <span className="results-badge-text">{technical.level.gamified.name}</span>
            <p className="results-badge-description">{technical.level.gamified.description}</p>
          </div>

          {/* Path Info */}
          <div className="recommended-path-content">
            <div className="path-option-icon">
              <RecommendedIcon />
            </div>
            <div className="recommended-path-text">
              <h4 className="path-option-title">{recommendedPath.name}</h4>
              <p className="path-option-description">{recommendedPath.description}</p>
            </div>
          </div>
        </button>
      </div>

      {/* Other Paths Section */}
      <div className="other-paths-section">
        <h3 className="other-paths-title">Explore Other Paths</h3>
        <div className="paths-grid">
          {otherPaths.map((path) => {
            const IconComponent = path.icon;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => handleSelectPath(path.id)}
                className="path-option-card"
              >
                <div className="path-option-icon">
                  <IconComponent />
                </div>
                <h4 className="path-option-title">{path.name}</h4>
                <p className="path-option-description">{path.description}</p>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}