// src/components/ResultsScreen.jsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga4';

// --- STYLED COMPONENTS (INCHANGÉS) ---
const ResultsContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 1rem;
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


function ResultsScreen({ score, total, restartGame }) {

  // Le hook useEffect pour Google Analytics (inchangé)
  useEffect(() => {
    ReactGA.event({
      category: "Quiz",
      action: "Finish_Quiz",
      label: `Score: ${score}/${total}`,
      value: score
    });
  }, []); // Le tableau vide est correct ici

  return (
    <ResultsContainer>
      {/* MODIFIÉ : Le titre */}
      <Title>Série Terminée !</Title>
      
      <ScoreText>
        Votre score est de :<br/>
        <span>{score} / {total}</span>
      </ScoreText>
      
      {/* MODIFIÉ : Le texte du bouton */}
      <RestartButton onClick={restartGame}>
        Retour aux séries
      </RestartButton>
    </ResultsContainer>
  );
}
export default ResultsScreen;