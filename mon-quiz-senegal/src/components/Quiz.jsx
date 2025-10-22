// src/components/Quiz.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react'; // Importer useRef et useEffect, useCallback
import styled from 'styled-components';
import AnswerList from './AnswerList';
import Timer from './Timer';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion'; // Importer motion

// Fonction pour mélanger un tableau (Fisher-Yates)
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

// Variantes d'animation Framer Motion
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
  // useRef pour stocker l'historique des réponses sans re-render
  const userAnswersRef = useRef([]);

  // S'assurer que la question actuelle existe
  const currentQuestion = questions && questions[currentIndex] ? questions[currentIndex] : null;

  // Mélanger les options quand la question change
  useEffect(() => {
    if (currentQuestion && currentQuestion.options) {
      setShuffledOptions(shuffleArray([...currentQuestion.options]));
    } else {
      setShuffledOptions([]); // S'il n'y a pas de question valide
    }
    // Réinitialiser l'historique au début d'une nouvelle série
    if (currentIndex === 0) {
        userAnswersRef.current = [];
    }
  }, [currentQuestion, currentIndex]); // Dépendances: question actuelle et index

  // Fonction pour jouer les sons
  const playSound = useCallback((soundFile) => {
    try {
      const audio = new Audio(`/sounds/${soundFile}`); // Chemin depuis /public/sounds/
      audio.play().catch(error => {
        console.warn("Lecture audio bloquée par le navigateur:", error);
      });
    } catch (error) {
      console.error("Erreur lors de la lecture du son:", error);
    }
  }, []); // Pas de dépendances externes

  // Gestion de la sélection de réponse (déplacée avant handleTimeUp à cause de useCallback)
  const handleAnswerSelect = useCallback((option) => {
    // Empêche de répondre plusieurs fois ou si la question n'est pas chargée
    if (selectedAnswer || !currentQuestion) return;

    playSound('click.mp3'); // Joue le son de clic
    setSelectedAnswer(option);

    // Enregistrement de la réponse pour la revue
    const correctAnswerText = currentQuestion.options.find(opt => opt.correct)?.text || 'N/A';
    userAnswersRef.current.push({
      questionText: currentQuestion.question,
      userAnswerText: option.text === 'TIME_UP' ? 'Temps écoulé' : option.text,
      correctAnswerText: correctAnswerText,
      explanation: currentQuestion.explanation || "Pas d'explication disponible.",
      isCorrect: option.correct
    });

    // Mise à jour du score, son correct/incorrect, et GA
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
      // Ne pas tracker GA pour "TIME_UP" ici car déjà fait dans handleTimeUp
      if (option.text !== 'TIME_UP') {
         ReactGA.event({
            category: "Quiz_Answers",
            action: "Answered_Incorrectly",
            label: currentQuestion.question.substring(0, 50)
         });
      }
    }

    // Délai avant de passer à la question suivante ou aux résultats
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null); // Réinitialise pour la prochaine question
      } else {
        showResults(userAnswersRef.current); // Passe les réponses à App.jsx
      }
    }, 3000); // Délai de 3 secondes pour voir l'explication/feedback
  }, [selectedAnswer, currentQuestion, setScore, playSound, showResults, currentIndex, questions.length]); // Dépendances


  // Gestion du temps écoulé
  const handleTimeUp = useCallback(() => {
     if (!currentQuestion) return; // Sécurité
    playSound('wrong.mp3'); // Joue le son "mauvais"
    ReactGA.event({
        category: "Quiz_Answers",
        action: "Time_Up",
        label: currentQuestion.question.substring(0, 50)
      });
    // Traite le temps écoulé comme une mauvaise réponse en appelant handleAnswerSelect
    handleAnswerSelect({ text: 'TIME_UP', correct: false });
  }, [currentQuestion, playSound, handleAnswerSelect]); // handleAnswerSelect est une dépendance

  // Affichage pendant le chargement (sécurité)
  if (!currentQuestion) {
    return <motion.div>Chargement de la question...</motion.div>;
  }

  // Rendu du composant
  return (
    <motion.div
      key={currentIndex} // Clé pour forcer l'animation à chaque changement de question
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Timer
        key={`timer-${currentIndex}`} // Clé unique aussi pour le Timer
        onTimeUp={handleTimeUp}
        stop={selectedAnswer !== null}
      />

      <QuestionText>{currentQuestion.question}</QuestionText>

      {/* Passe les options mélangées */}
      <AnswerList
        options={shuffledOptions}
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