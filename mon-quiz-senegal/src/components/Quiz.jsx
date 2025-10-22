// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react'; // <<< Importer useEffect
import styled from 'styled-components';
import AnswerList from './AnswerList';
import Timer from './Timer';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';

// >>> Copier la fonction shuffleArray ici aussi
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
// <<< FIN COPIE

// --- STYLED COMPONENTS (INCHANGÉS) ---
const QuestionText = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.8rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 2rem;
  text-align: center;
`;

const QuestionCount = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: ${props => props.theme.colors.gray};
`;

const ExplanationBox = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-left: 5px solid ${props => props.theme.colors.ochre};
  padding: 1rem;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;

  strong {
    color: ${props => props.theme.colors.ochre};
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const QuitButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  margin-top: 1.5rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: ${props => props.theme.colors.red};
    text-decoration: underline;
  }
`;
// --- FIN STYLED COMPONENTS ---

const screenVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }
};

// --- COMPOSANT ---
function Quiz({ questions, setScore, showResults, goToSeriesScreen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // >>> État pour les options mélangées
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Vérifie si 'questions' existe et a une entrée à 'currentIndex'
  const currentQuestion = questions && questions[currentIndex] ? questions[currentIndex] : null;

  // >>> useEffect pour mélanger les options quand la question change
  useEffect(() => {
    // S'assure que currentQuestion et ses options existent
    if (currentQuestion && currentQuestion.options) {
      // Mélange une COPIE des options
      setShuffledOptions(shuffleArray([...currentQuestion.options]));
    } else {
      setShuffledOptions([]); // Vide les options s'il n'y a pas de question valide
    }
  }, [currentQuestion]); // Dépendance: se relance si currentQuestion change
  // <<< FIN useEffect

  // Fonctions handleTimeUp et handleAnswerSelect (inchangées pour la logique de score/GA)
  const handleTimeUp = () => {
     if (!currentQuestion) return; // Sécurité
    ReactGA.event({ /* ... */ });
    handleAnswerSelect({ text: 'TIME_UP', correct: false });
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer || !currentQuestion) return; // Sécurité
    setSelectedAnswer(option);

    if (option.correct) {
      setScore(prev => prev + 1);
      ReactGA.event({ /* ... Correct ... */ });
    } else if (option.text !== 'TIME_UP') {
      ReactGA.event({ /* ... Incorrect ... */ });
    }

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
      } else {
        showResults();
      }
    }, 3000); // Délai de 3 secondes
  };

  // Sécurité: Affiche un message si pas de question (ne devrait pas arriver normalement)
  if (!currentQuestion) {
    return <motion.div>Chargement de la question...</motion.div>;
  }

  return (
    <motion.div
      // Utilise l'index comme key pour forcer l'animation à chaque question
      key={currentIndex}
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Timer
        key={`timer-${currentIndex}`} // Key unique pour le timer aussi
        onTimeUp={handleTimeUp}
        stop={selectedAnswer !== null}
      />

      <QuestionText>{currentQuestion.question}</QuestionText>

      {/* >>> Passer les options mélangées */}
      <AnswerList
        options={shuffledOptions}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
      />
      {/* <<< FIN MODIFICATION */}

      {selectedAnswer && currentQuestion.explanation && (
        <ExplanationBox>
          <strong>Le saviez-vous ? 💡</strong>
          {currentQuestion.explanation}
        </ExplanationBox>
      )}

      <QuestionCount>
        Question {currentIndex + 1} sur {questions.length}
      </QuestionCount>

      <QuitButton onClick={goToSeriesScreen}>
        Quitter la série
      </QuitButton>
    </motion.div>
  );
}
export default Quiz;