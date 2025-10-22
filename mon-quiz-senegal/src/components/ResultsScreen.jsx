// src/components/ResultsScreen.jsx
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import ReactGA from 'react-ga4'; // Assurez-vous d'avoir configuré GA dans main.jsx
import { motion } from 'framer-motion';
import { quizzes } from '../data/questions'; // Importé pour obtenir le titre de la catégorie dans le partage

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

// Style pour le bouton "Partager"
const ShareButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    border-color: ${props => props.theme.colors.dark};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Style pour le bouton "Voir mes erreurs"
const ReviewButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  /* margin-top: 1rem; Retiré pour que ShareButton soit avant */
  margin-bottom: 1.5rem; /* Espace avant le bouton principal */
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: ${props => props.theme.colors.ochre};
    text-decoration: underline;
  }
`;

// Style pour le bouton "Retour aux séries"
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

// Fonction pour déterminer le message de feedback
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

// Variantes d'animation Framer Motion
const screenVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
};

// --- COMPOSANT ---
function ResultsScreen({ score, total, restartGame, categoryKey, seriesIndex, showReview, reviewData }) {

  // Effet pour GA et sauvegarde du meilleur score
  useEffect(() => {
    // Google Analytics Event
    ReactGA.event({
      category: "Quiz",
      action: "Finish_Quiz",
      label: `${categoryKey || 'N/A'} - Série ${seriesIndex !== null ? seriesIndex + 1 : 'N/A'} - Score: ${score}/${total}`,
      value: score
    });

    // Sauvegarde du meilleur score
    if (categoryKey !== null && seriesIndex !== null && typeof categoryKey === 'string') {
      const scoreKey = `highScore-${categoryKey}-${seriesIndex}`;
      try {
        const storedHighScore = localStorage.getItem(scoreKey);
        if (storedHighScore === null || score > parseInt(storedHighScore, 10)) {
          localStorage.setItem(scoreKey, score.toString());
          console.log(`Nouveau meilleur score pour ${scoreKey}: ${score}`);
        }
      } catch (error) {
        console.error("Erreur lors de l'accès au localStorage:", error);
      }
    } else {
       console.warn("categoryKey ou seriesIndex manquant/invalide pour sauvegarde score", {categoryKey, seriesIndex});
    }
  }, [score, total, categoryKey, seriesIndex]); // Dépendances

  // Déterminer le message de feedback
  const feedback = getFeedbackMessage(score, total);

  // Vérifier s'il y a des erreurs à revoir
  const hasErrors = reviewData && reviewData.some(answer => !answer.isCorrect);

  // Fonction pour gérer le partage
  const handleShare = async () => {
    // Construction dynamique du titre de la catégorie, avec fallback
    const categoryTitle = quizzes[categoryKey]?.title || categoryKey || 'ce quiz';
    const seriesNum = seriesIndex !== null ? seriesIndex + 1 : '';

    const shareText = `J'ai obtenu ${score}/${total} à la Série ${seriesNum} (${categoryTitle}) sur Teranga Vision Quiz ! Peux-tu faire mieux ? 🤔🇸🇳`;
    const shareUrl = 'https://senculture.netlify.app'; // L'URL de ton site
    const shareTitle = 'Teranga Vision Quiz - Score';

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        console.log('Score partagé avec succès !');
        ReactGA.event({ category: "Share", action: "Share_Success", label: "WebShareAPI" });
      } catch (error) {
        console.error('Erreur lors du partage Web Share:', error);
        ReactGA.event({ category: "Share", action: "Share_Error", label: "WebShareAPI" });
      }
    } else {
      console.log('API Web Share non supportée.');
      ReactGA.event({ category: "Share", action: "Share_Fallback", label: "WebShareAPI_NotSupported" });
      alert("La fonction de partage n'est pas supportée sur ce navigateur. Vous pouvez copier le lien !");
    }
  };

  // Vérifier si le navigateur supporte l'API Web Share
  const canShare = typeof navigator !== 'undefined' && navigator.share;

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

      {/* Bouton Partager */}
      <ShareButton onClick={handleShare} disabled={!canShare}>
        🔗 Partager mon score
      </ShareButton>

      {/* Bouton Voir mes erreurs (conditionnel) */}
      {hasErrors && (
        <ReviewButton onClick={showReview}>
          🔍 Voir mes erreurs
        </ReviewButton>
      )}

      {/* Bouton Retour */}
      <RestartButton onClick={restartGame}>
        Retour aux séries
      </RestartButton>

    </ResultsContainer>
  );
}
export default ResultsScreen;