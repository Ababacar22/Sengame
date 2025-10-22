// src/components/Quiz.jsx
import React, { useState, useEffect, useCallback } from 'react'; // Importer useCallback
import styled from 'styled-components';
import AnswerList from './AnswerList';
import Timer from './Timer';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';

// Copier la fonction shuffleArray ici
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

// --- STYLED COMPONENTS ---
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
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = questions && questions[currentIndex] ? questions[currentIndex] : null;

  useEffect(() => {
    if (currentQuestion && currentQuestion.options) {
      setShuffledOptions(shuffleArray([...currentQuestion.options]));
    } else {
      setShuffledOptions([]);
    }
  }, [currentQuestion]);

  // <<< Fonction pour jouer un son >>>
  const playSound = useCallback((soundFile) => {
    try {
      const audio = new Audio(`/sounds/${soundFile}`); // Chemin depuis public/
      audio.play().catch(error => {
        console.warn("Lecture audio bloquée par le navigateur:", error);
      });
    } catch (error) {
      console.error("Erreur lors de la lecture du son:", error);
    }
  }, []); // Pas de dépendances externes

  // <<< handleAnswerSelect (déplacé avant handleTimeUp pour la dépendance de useCallback) >>>
  const handleAnswerSelect = useCallback((option) => {
    if (selectedAnswer || !currentQuestion) return;

    playSound('click.mp3'); // Joue le son de clic

    setSelectedAnswer(option);

    if (option.correct) {
      setScore(prev => prev + 1);
      setTimeout(() => playSound('correct.mp3'), 200); // Joue son correct après délai
      ReactGA.event({
        category: "Quiz_Answers",
        action: "Answered_Correctly",
        label: currentQuestion.question.substring(0, 50)
      });
    } else {
      setTimeout(() => playSound('wrong.mp3'), 200); // Joue son incorrect après délai
      if (option.text !== 'TIME_UP') {
         ReactGA.event({
            category: "Quiz_Answers",
            action: "Answered_Incorrectly",
            label: currentQuestion.question.substring(0, 50)
         });
      }
    }

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
      } else {
        showResults();
      }
    }, 3000); // Délai avant question suivante
  }, [selectedAnswer, currentQuestion, setScore, playSound, showResults, currentIndex, questions.length]); // Dépendances


  // <<< handleTimeUp >>>
  const handleTimeUp = useCallback(() => {
     if (!currentQuestion) return;
    playSound('wrong.mp3'); // Joue le son "mauvais"
    ReactGA.event({
        category: "Quiz_Answers",
        action: "Time_Up",
        label: currentQuestion.question.substring(0, 50)
      });
    // Appelle handleAnswerSelect pour gérer la suite comme une mauvaise réponse
    handleAnswerSelect({ text: 'TIME_UP', correct: false });
  }, [currentQuestion, playSound, handleAnswerSelect]); // handleAnswerSelect est une dépendance

  if (!currentQuestion) {
    return <motion.div>Chargement de la question...</motion.div>;
  }

  return (
    <motion.div
      key={currentIndex}
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Timer
        key={`timer-${currentIndex}`}
        onTimeUp={handleTimeUp} // Passe la version useCallback
        stop={selectedAnswer !== null}
      />

      <QuestionText>{currentQuestion.question}</QuestionText>

      <AnswerList
        options={shuffledOptions}
        onAnswerSelect={handleAnswerSelect} // Passe la version useCallback
        selectedAnswer={selectedAnswer}
      />

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