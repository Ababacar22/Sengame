// src/App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import SeriesScreen from './components/SeriesScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';
import { quizzes } from './data/questions';
import ReactGA from 'react-ga4';
import logoGainde from './assets/logo_bleu.png'; // Vérifiez que ce fichier est dans src/assets/

// --- STYLED COMPONENTS ---
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
`;

const LogoImage = styled.img`
  max-height: 80px;
  margin-bottom: 1.5rem;
  display: block;
`;

const QuizCard = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  line-height: 1.5;

  a {
    color: ${props => props.theme.colors.ochre};
    text-decoration: none;
    font-weight: bold;
  }
`;
// --- FIN STYLED COMPONENTS ---


function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'selecting_series', 'playing', 'results'
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);

  // Étape 1: L'utilisateur choisit une catégorie
  const selectCategory = (categoryKey) => {
    setSelectedCategoryKey(categoryKey);
    setGameState('selecting_series');
  };
  
  // Étape 2: L'utilisateur choisit une série
  const startGame = (seriesIndex) => {
    const questionsForSeries = quizzes[selectedCategoryKey].series[seriesIndex];
    
    setCurrentQuiz(questionsForSeries);
    setScore(0);
    setGameState('playing');
    
    ReactGA.event({
      category: "Quiz",
      action: "Start_Quiz",
      label: `${quizzes[selectedCategoryKey].title} - Série ${seriesIndex + 1}`
    });
  };
  
  // Étape 3: Le quiz est fini
  const showResults = () => setGameState('results');
  
  // Étape 4: Navigation (retour)
  const goToSeriesScreen = () => setGameState('selecting_series');
  const goToStart = () => setGameState('start');

  // Gère l'affichage des écrans
  const renderGame = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen selectCategory={selectCategory} />; 
      
      case 'selecting_series':
        return (
          <SeriesScreen 
            category={quizzes[selectedCategoryKey]}
            startGame={startGame}
            goToStart={goToStart}
          />
        );
        
      case 'playing':
        return (
          <Quiz 
            questions={currentQuiz} 
            setScore={setScore} 
            showResults={showResults} 
            goToSeriesScreen={goToSeriesScreen} // Pour le bouton "Quitter"
          />
        );
        
      case 'results':
        return (
          <ResultsScreen 
            score={score} 
            total={currentQuiz.length} 
            restartGame={goToSeriesScreen} // "Rejouer" ramène à l'écran des séries
          />
        );
        
      default:
        return <StartScreen selectCategory={selectCategory} />;
    }
  }

  return (
    <AppContainer>
      <LogoImage src={logoGainde} alt="Logo Gainde IT" />
      <QuizCard>
        {renderGame()}
      </QuizCard>
      <FooterContainer>
        <p>
          &copy; {new Date().getFullYear()} <a href="https://gainde-it.netlify.app" target="_blank" rel="noopener noreferrer">Gainde IT</a>.
          <br/>
          Un projet didactique 🚀 pour la promotion du savoir et de la culture sénégalaise et africaine.
        </p>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;