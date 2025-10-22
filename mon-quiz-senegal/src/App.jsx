// src/App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import SeriesScreen from './components/SeriesScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';
import { quizzes } from './data/questions';
import ReactGA from 'react-ga4';
import logoGainde from './assets/logo_bleu.png'; // Vérifiez le chemin
import { AnimatePresence } from 'framer-motion';

// >>> Fonction pour mélanger un tableau (Fisher-Yates)
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
// <<< FIN FONCTION SHUFFLE

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
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
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
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);
  const [selectedSeriesIndex, setSelectedSeriesIndex] = useState(null);

  // Étape 1: L'utilisateur choisit une catégorie
  const selectCategory = (categoryKey) => {
    setSelectedCategoryKey(categoryKey);
    setGameState('selecting_series');
  };

  // Étape 2: L'utilisateur choisit une série
  const startGame = (seriesIndex) => {
    setSelectedSeriesIndex(seriesIndex);

    // Récupère les questions originales de la série
    const originalQuestionsForSeries = quizzes[selectedCategoryKey].series[seriesIndex];

    // >>> Mélange une COPIE du tableau avant de le stocker
    const shuffledQuestions = shuffleArray([...originalQuestionsForSeries]);

    setCurrentQuiz(shuffledQuestions); // Utilise les questions mélangées
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
        return <StartScreen key="start" selectCategory={selectCategory} />;

      case 'selecting_series':
        return (
          <SeriesScreen
            key="series"
            category={quizzes[selectedCategoryKey]}
            categoryKey={selectedCategoryKey}
            startGame={startGame}
            goToStart={goToStart}
          />
        );

      case 'playing':
        return (
          <Quiz
            key="quiz"
            questions={currentQuiz} // Passe le tableau déjà mélangé
            setScore={setScore}
            showResults={showResults}
            goToSeriesScreen={goToSeriesScreen}
          />
        );

      case 'results':
        return (
          <ResultsScreen
            key="results"
            score={score}
            total={currentQuiz.length}
            restartGame={goToSeriesScreen}
            categoryKey={selectedCategoryKey}
            seriesIndex={selectedSeriesIndex}
          />
        );

      default:
        return <StartScreen key="start_default" selectCategory={selectCategory} />;
    }
  }

  return (
    <AppContainer>
      <LogoImage src={logoGainde} alt="Logo Gainde IT" />
      <QuizCard>
          <AnimatePresence mode="wait">
             {gameState === 'start' ? (
               renderGame()
             ) : (
              <ContentWrapper key={gameState}>
                {renderGame()}
              </ContentWrapper>
             )}
          </AnimatePresence>
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