// src/App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import SeriesScreen from './components/SeriesScreen'; // 1. Importer le nouvel écran
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';
import { quizzes } from './data/questions'; // Notre BDD
import ReactGA from 'react-ga4';
import logoGainde from './assets/logo_bleu.png'; // Votre logo

// --- STYLED COMPONENTS (INCHANGÉS) ---
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
  // 2. MODIFIER L'ÉTAT DU JEU
  const [gameState, setGameState] = useState('start'); // 'start', 'selecting_series', 'playing', 'results'
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  
  // 3. NOUVEL ÉTAT : Mémoriser la catégorie choisie
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);

  // 4. MODIFIER : Cette fonction s'appelle 'selectCategory'
  const selectCategory = (categoryKey) => {
    setSelectedCategoryKey(categoryKey); // Mémorise la catégorie (ex: 'geographie')
    setGameState('selecting_series'); // Passe à l'écran des séries
  };
  
  // 5. NOUVEAU : La fonction 'startGame' prend l'index de la série
  const startGame = (seriesIndex) => {
    // Récupère les questions de la série (tableau)
    const questionsForSeries = quizzes[selectedCategoryKey].series[seriesIndex];
    
    setCurrentQuiz(questionsForSeries);
    setScore(0);
    setGameState('playing');
    
    // Suivi Google Analytics (on ajoute la série)
    ReactGA.event({
      category: "Quiz",
      action: "Start_Quiz",
      label: `${quizzes[selectedCategoryKey].title} - Série ${seriesIndex + 1}`
    });
  };
  
  const showResults = () => setGameState('results');
  
  // 6. NOUVEAU : Fonctions de navigation
  const goToSeriesScreen = () => setGameState('selecting_series'); // Pour le bouton "Rejouer"
  const goToStart = () => setGameState('start'); // Pour le bouton "Retour"

  // 7. MODIFIER : Le 'renderGame' gère le nouvel état 'selecting_series'
  const renderGame = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen selectCategory={selectCategory} />; 
      
      case 'selecting_series':
        // Affiche le nouvel écran
        return (
          <SeriesScreen 
            category={quizzes[selectedCategoryKey]} // Passe les infos de la catégorie
            startGame={startGame} // Passe la fonction pour démarrer le jeu
            goToStart={goToStart} // Passe la fonction de retour
          />
        );
        
      case 'playing':
        return (
          <Quiz 
            questions={currentQuiz} 
            setScore={setScore} 
            showResults={showResults} 
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