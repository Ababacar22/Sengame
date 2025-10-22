// src/components/ResultsScreen.jsx
import React from 'react';
import styled from 'styled-components';

// ... (Tous vos styled-components Title, ScoreText... restent les mêmes) ...

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


function ResultsScreen({ score, total, restartGame }) {
  return (
    <ResultsContainer>
      <Title>Quiz Terminé !</Title>
      <ScoreText>
        Votre score est de :<br/>
        <span>{score} / {total}</span>
      </ScoreText>
      
      {/* Cette fonction 'restartGame' ramène maintenant à l'écran des catégories */}
      <RestartButton onClick={restartGame}>
        Choisir une autre catégorie
      </RestartButton>
    </ResultsContainer>
  );
}
export default ResultsScreen;