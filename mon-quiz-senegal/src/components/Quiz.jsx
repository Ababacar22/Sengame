// src/components/Quiz.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import Timer from './Timer'; // <-- 1. Importer le Timer

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

function Quiz({ questions, setScore, showResults }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const currentQuestion = questions[currentIndex];

  // 2. Fonction appelée par le Timer quand le temps est écoulé
  const handleTimeUp = () => {
    // On simule une "mauvaise réponse"
    // L'objet 'TIME_UP' est juste là pour être différent 
    // d'une réponse cliquée
    handleAnswerSelect({ text: 'TIME_UP', correct: false });
  };

  const handleAnswerSelect = (option) => {
    // Empêche de répondre plusieurs fois
    if (selectedAnswer) return; 

    setSelectedAnswer(option); // Bloque les réponses

    // Met à jour le score si correct
    if (option.correct) {
      setScore(prev => prev + 1);
    }

    // Passe à la question suivante après un délai (pour voir le feedback)
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null); // Réinitialise la sélection
      } else {
        showResults(); // Fin du quiz
      }
    }, 1500);
  };

  return (
    <div>
      {/* 3. Ajout du composant Timer */}
      <Timer 
        // L'astuce 'key' force React à recréer le Timer
        // à chaque nouvelle question, ce qui le réinitialise.
        key={currentIndex} 
        onTimeUp={handleTimeUp}
        // On dit au Timer de s'arrêter (visuellement et logiquement)
        // dès qu'une réponse est sélectionnée.
        stop={selectedAnswer !== null}
      />
      
      <QuestionText>{currentQuestion.question}</QuestionText>
      
      <AnswerList 
        options={currentQuestion.options}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
      />
      
      <QuestionCount>
        Question {currentIndex + 1} sur {questions.length}
      </QuestionCount>
    </div>
  );
}
export default Quiz;