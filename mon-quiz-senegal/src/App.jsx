// src/App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';

// 1. Importer l'objet 'quizzes' au lieu de 'questions'
import { quizzes } from './data/questions';

const QuizCard = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

function App() {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  
  // 2. NOUVEL ÉTAT: pour stocker les questions du quiz sélectionné
  const [currentQuiz, setCurrentQuiz] = useState([]);

  // 3. 'startGame' accepte maintenant la 'categoryKey'
  const startGame = (categoryKey) => {
    setScore(0);
    
    // 4. On récupère le tableau de questions de la catégorie choisie
    const questionsForCategory = quizzes[categoryKey].questions;
    setCurrentQuiz(questionsForCategory); // On le stocke dans notre état
    
    setGameState('playing'); // On lance le jeu
  };
  
  const showResults = () => setGameState('results');
  
  // 5. Le 'restartGame' nous ramène simplement à l'écran d'accueil
  const restartGame = () => setGameState('start');

  const renderGame = () => {
    switch (gameState) {
      case 'playing':
        return (
          <Quiz 
            // 6. On passe 'currentQuiz' (les questions filtrées) au lieu de tout
            questions={currentQuiz} 
            setScore={setScore} 
            showResults={showResults} 
          />
        );
      case 'results':
        return (
          <ResultsScreen 
            score={score} 
            // 7. Le total est la longueur du quiz qu'on vient de jouer
            total={currentQuiz.length} 
            restartGame={restartGame} 
          />
        );
      case 'start':
      default:
        // 8. On passe la fonction 'startGame' mise à jour
        return <StartScreen startGame={startGame} />;
    }
  }

  return (
    <QuizCard>
      {renderGame()}
    </QuizCard>
  );
}

export default App;