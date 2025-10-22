// src/components/ReviewScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- STYLED COMPONENTS ---
const ReviewContainer = styled(motion.div)`
  text-align: left; /* Aligner le texte à gauche */
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 2rem;
  text-align: center; /* Centrer le titre */
`;

const QuestionBlock = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.light};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const QuestionTextReview = styled.p`
  font-weight: bold;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
`;

const AnswerText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  margin-left: 1rem; /* Indentation */

  &.user-answer {
    color: ${props => props.theme.colors.red}; /* Réponse utilisateur en rouge */
    text-decoration: line-through; /* Barré */
  }

  &.correct-answer {
    color: ${props => props.theme.colors.green}; /* Bonne réponse en vert */
    font-weight: bold;
  }
`;

// Réutilisation du style ExplanationBox de Quiz.jsx
const ExplanationBoxReview = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-left: 5px solid ${props => props.theme.colors.ochre};
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;

  strong {
    color: ${props => props.theme.colors.ochre};
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  margin-top: 2.5rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto; /* Centrer */

  &:hover {
    color: ${props => props.theme.colors.ochre};
    text-decoration: underline;
  }
`;
// --- FIN STYLED COMPONENTS ---

// Variantes d'animation (peut être le même que les autres écrans)
const screenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

// --- COMPOSANT ---
function ReviewScreen({ reviewData, goToResults }) {

  // Filtrer pour ne garder que les erreurs
  const incorrectAnswers = reviewData.filter(answer => !answer.isCorrect);

  return (
    <ReviewContainer
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title>Revue des erreurs</Title>

      {incorrectAnswers.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Aucune erreur, félicitations !</p>
      ) : (
        incorrectAnswers.map((answer, index) => (
          <QuestionBlock key={index}>
            <QuestionTextReview>{index + 1}. {answer.questionText}</QuestionTextReview>
            <AnswerText className="user-answer">Votre réponse : {answer.userAnswerText}</AnswerText>
            <AnswerText className="correct-answer">Bonne réponse : {answer.correctAnswerText}</AnswerText>
            {answer.explanation && (
              <ExplanationBoxReview>
                <strong>Explication :</strong>
                {answer.explanation}
              </ExplanationBoxReview>
            )}
          </QuestionBlock>
        ))
      )}

      <BackButton onClick={goToResults}>
        &larr; Retour aux Résultats
      </BackButton>
    </ReviewContainer>
  );
}

export default ReviewScreen;