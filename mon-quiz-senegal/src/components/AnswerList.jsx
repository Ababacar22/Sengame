// src/components/AnswerList.jsx
import React from 'react';
import styled, { css } from 'styled-components';

// Logique de style complexe
const getButtonStyles = (props) => {
  const { theme, option, selectedAnswer } = props;

  // 1. Si une réponse A ÉTÉ sélectionnée (ou temps écoulé)
  if (selectedAnswer) {
    // A. Si CETTE option est la bonne réponse (toujours la montrer)
    if (option.correct) {
      return css`
        background-color: ${theme.colors.green};
        color: white;
        transform: scale(1.05);
      `;
    }
    
    // B. Si CETTE option est celle qui a été cliquée ET qu'elle est fausse
    //    (AJOUT: on vérifie que ce n'est pas un 'TIME_UP')
    if (
      selectedAnswer.text === option.text && 
      !option.correct &&
      selectedAnswer.text !== 'TIME_UP'
    ) {
      return css`
        background-color: ${theme.colors.red};
        color: white;
        opacity: 0.8;
      `;
    }

    // C. Toutes les autres options (fausses, non cliquées, ou cas 'TIME_UP')
    return css`
      background-color: ${theme.colors.light};
      color: ${theme.colors.gray};
      opacity: 0.7;
    `;
  }

  // 2. État par défaut (aucune réponse sélectionnée)
  return css`
    background-color: ${theme.colors.ochre};
    color: white;
    &:hover {
      background-color: #d16b50; /* Ocre un peu plus foncé */
    }
  `;
};

// Le composant bouton (INCHANGÉ)
const AnswerButton = styled.button`
  width: 100%;
  text-align: left;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Applique les styles conditionnels */
  ${props => getButtonStyles(props)}

  /* Désactive le clic après sélection */
  &:disabled {
    cursor: not-allowed;
  }
`;

// La grille (INCHANGÉ)
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Le composant (INCHANGÉ)
function AnswerList({ options, onAnswerSelect, selectedAnswer }) {
  return (
    <ButtonGrid>
      {options.map((option) => (
        <AnswerButton
          key={option.text}
          onClick={() => onAnswerSelect(option)}
          disabled={selectedAnswer !== null}
          option={option}
          selectedAnswer={selectedAnswer}
        >
          {option.text}
        </AnswerButton>
      ))}
    </ButtonGrid>
  );
}

export default AnswerList;