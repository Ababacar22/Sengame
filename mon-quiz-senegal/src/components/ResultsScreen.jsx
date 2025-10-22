// src/components/ResultsScreen.jsx
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';

// --- STYLED COMPONENTS ---
const ResultsContainer = styled(motion.div)`
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 1rem;
`;

const FeedbackText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  ${({ level, theme }) => {
    if (level === 'good') return css`color: ${theme.colors.green};`;
    if (level === 'medium') return css`color: ${theme.colors.ochre};`;
    return css`color: ${theme.colors.red};`;
  }}
`;

const ScoreText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;

  span {
    font-weight: bold;
    font-size: 2rem;
    color: ${props => props.theme.colors.green};
  }
`;

// <<< AJOUT : Style pour le bouton "Voir mes erreurs"
const ReviewButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 1.5rem; /* Espace avant le bouton principal */
  cursor: pointer;
  display: block; /* Nécessaire pour centrer avec margin auto */
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: ${props => props.theme.colors.ochre};
    text-decoration: underline;
  }
`;


const RestartButton = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.green};
  color: white;
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 133, 63, 0.3);
  }
`;
// --- FIN STYLED COMPONENTS ---

// Fonction getFeedbackMessage (inchangée)
const getFeedbackMessage = (score, total) => {
  if (total === 0) return { message: "Quiz terminé !", level: 'medium' };
  const percentage = (score / total) * 100;
   if (percentage === 100) {
     return { message: "Parfait ! 💯 Vous êtes incollable !", level: 'good' };
  } else if (percentage >= 80) {
    return { message: "Excellent ! ✨ Félicitations, vous maîtrisez le sujet !", level: 'good' };
  } else if (percentage >= 50) {
    return { message: "Pas mal du tout ! 👍 Continuez comme ça !", level: 'medium' };
  } else {
    return { message: "Bon essai ! 😊 Chaque erreur est une occasion d'apprendre.", level: 'bad' };
  }
};

const screenVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
};

// --- COMPOSANT ---
// <<< MODIFIÉ : Accepter showReview et reviewData
function ResultsScreen({ score, total, restartGame, categoryKey, seriesIndex, showReview, reviewData }) {

  useEffect(() => {
    // GA & High Score (inchangé)
    ReactGA.event({
      category: "Quiz",
      action: "Finish_Quiz",
      label: `${categoryKey} - Série ${seriesIndex + 1} - Score: ${score}/${total}`,
      value: score
    });
    if (categoryKey !== null && seriesIndex !== null && typeof categoryKey === 'string') {
        const scoreKey = `highScore-${categoryKey}-${seriesIndex}`;
        try {
            const storedHighScore = localStorage.getItem(scoreKey);
            if (storedHighScore === null || score > parseInt(storedHighScore, 10)) {
              localStorage.setItem(scoreKey, score.toString());
              console.log(`Nouveau meilleur score pour ${scoreKey}: ${score}`);
            }
        } catch (error) { console.error("Erreur localStorage:", error); }
    }
  }, [score, total, categoryKey, seriesIndex]);

  const feedback = getFeedbackMessage(score, total);

  // >>> AJOUT : Vérifier s'il y a des erreurs
  const hasErrors = reviewData && reviewData.some(answer => !answer.isCorrect);

  return (
    <ResultsContainer
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title>Série Terminée !</Title>
      <FeedbackText level={feedback.level}>
        {feedback.message}
      </FeedbackText>
      <ScoreText>
        Votre score est de :<br/>
        <span>{score} / {total}</span>
      </ScoreText>

      {/* >>> AJOUT : Affichage conditionnel du bouton */}
      {hasErrors && (
        <ReviewButton onClick={showReview}>
          🔍 Voir mes erreurs
        </ReviewButton>
      )}
      {/* <<< FIN AJOUT */}

      <RestartButton onClick={restartGame}>
        Retour aux séries
      </RestartButton>
    </ResultsContainer>
  );
}
export default ResultsScreen;