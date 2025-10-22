// src/components/Timer.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Définit le temps alloué pour chaque question
const DURATION_SECONDES = 15;

// L'animation CSS qui fait rétrécir la barre
const shrink = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

// Le conteneur de la barre (le fond gris clair)
const TimerWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

// La barre de progression (jaune) qui s'anime
const TimerBar = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.yellow};
  /* Applique l'animation 'shrink' sur la 'DURATION' définie */
  animation: ${shrink} ${props => props.duration}s linear forwards;
  /* Permet de pauser/reprendre l'animation via le style inline */
  animation-play-state: ${props => props.playState};
`;

function Timer({ onTimeUp, stop }) {
  // Ce hook 'useEffect' est le "cerveau" du minuteur.
  useEffect(() => {
    
    // Si 'stop' est vrai (l'utilisateur a répondu), on ne fait rien.
    if (stop) {
      return;
    }

    // Démarre un minuteur JavaScript
    const timerId = setTimeout(() => {
      // Quand le temps est écoulé, on appelle la fonction 'onTimeUp'
      // qui nous a été donnée par le composant parent (Quiz.jsx)
      onTimeUp();
    }, DURATION_SECONDES * 1000); // Convertit les secondes en millisecondes

    // La fonction de "nettoyage"
    // React l'exécute si le composant est "démonté" (ex: on passe
    // à la question suivante) ou si 'stop' change.
    return () => {
      clearTimeout(timerId); // On annule le minuteur pour éviter les bugs
    };
    
  }, [onTimeUp, stop]); // Ce 'useEffect' se relance si 'onTimeUp' ou 'stop' change

  return (
    <TimerWrapper>
      <TimerBar
        duration={DURATION_SECONDES}
        // Si 'stop' est vrai, on met l'animation CSS en pause
        playState={stop ? 'paused' : 'running'}
      />
    </TimerWrapper>
  );
}

export default Timer;