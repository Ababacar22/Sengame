// src/components/ResultsScreen.jsx
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components'; // 1. Importer 'css'
import ReactGA from 'react-ga4';

// --- STYLED COMPONENTS ---
const ResultsContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 1rem;
`;

// 2. NOUVEAU : Style pour le message de feedback
const FeedbackText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  /* Style conditionnel basé sur le niveau de score */
  ${({ level, theme }) => {
    if (level === 'good') {
      return css`color: ${theme.colors.green};`; // Vert pour les bons scores
    }
    if (level === 'medium') {
      return css`color: ${theme.colors.ochre};`; // Ocre pour les scores moyens
    }
    return css`color: ${theme.colors.red};`; // Rouge pour les scores bas
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


// 3. NOUVEAU : Fonction pour obtenir le message basé sur le score
const getFeedbackMessage = (score, total) => {
  if (total === 0) return { message: "Quiz terminé !", level: 'medium' }; // Sécurité
  
  const percentage = (score / total) * 100;

  if (percentage >= 80) {
    return { message: "Excellent ! ✨ Félicitations, vous maîtrisez le sujet !", level: 'good' };
  } else if (percentage >= 50) {
    return { message: "Pas mal du tout ! 👍 Continuez comme ça !", level: 'medium' };
  } else {
    return { message: "Bon essai ! 😊 Chaque erreur est une occasion d'apprendre.", level: 'bad' };
  }
  // Ajoutez d'autres paliers si vous le souhaitez (ex: score parfait)
};


function ResultsScreen({ score, total, restartGame }) {

  // Google Analytics (inchangé)
  useEffect(() => {
    ReactGA.event({
      category: "Quiz",
      action: "Finish_Quiz",
      label: `Score: ${score}/${total}`,
      value: score
    });
  }, [score, total]); 

  // 4. Appeler la fonction pour obtenir le message et le niveau
  const feedback = getFeedbackMessage(score, total);

  return (
    <ResultsContainer>
      <Title>Série Terminée !</Title>
      
      {/* 5. Afficher le message de feedback */}
      <FeedbackText level={feedback.level}>
        {feedback.message}
      </FeedbackText>
      
      <ScoreText>
        Votre score est de :<br/>
        <span>{score} / {total}</span>
      </ScoreText>
      
      <RestartButton onClick={restartGame}>
        Retour aux séries
      </RestartButton>
    </ResultsContainer>
  );
}
export default ResultsScreen;