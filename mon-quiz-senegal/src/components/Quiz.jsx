// src/components/Quiz.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import Timer from './Timer';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion'; // <<< 1. Importer motion

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

// <<< 2. Définition des variantes d'animation (Exemple: arrivée par le bas)
const screenVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }
};

// --- COMPOSANT ---
function Quiz({ questions, setScore, showResults, goToSeriesScreen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentIndex];

  // Fonctions handleTimeUp et handleAnswerSelect (inchangées)
  const handleTimeUp = () => {
    ReactGA.event({ /* ... */ });
    handleAnswerSelect({ text: 'TIME_UP', correct: false });
  };

  const handleAnswerSelect = (option) => {
    if (selectedAnswer) return;
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

  return (
    // <<< 3. Wrapper tout le contenu dans motion.div et appliquer les props
    <motion.div
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Timer
        key={currentIndex}
        onTimeUp={handleTimeUp}
        stop={selectedAnswer !== null}
      />

      <QuestionText>{currentQuestion.question}</QuestionText>

      <AnswerList
        options={currentQuestion.options}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
      />

      {/* Affiche l'explication si une réponse est sélectionnée ET si l'explication existe */}
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