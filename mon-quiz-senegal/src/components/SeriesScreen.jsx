// src/components/SeriesScreen.jsx
import React, { useState, useEffect } from 'react'; // <<< Importer useState, useEffect
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- STYLED COMPONENTS ---
const SeriesContainer = styled(motion.div)`
  text-align: center;
`;

const CategoryTitle = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 2.5rem;
`;

const SeriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const SeriesButton = styled.button`
  background-color: ${props => props.theme.colors.green};
  color: white;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1.4;
  position: relative; /* Pour positionner le score */
  overflow: hidden; /* Pour s'assurer que rien ne dépasse */

  span {
    font-size: 0.85rem;
    font-weight: 400;
    display: block;
    opacity: 0.8;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #007336;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  /* <<< Style pour le meilleur score */
  .high-score {
    position: absolute; /* Positionnement absolu */
    top: 5px; /* Petit décalage du haut */
    right: 8px; /* Petit décalage de la droite */
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.dark}; /* Texte foncé sur fond jaune */
    opacity: 0.9;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.ochre};
    text-decoration: underline;
  }
`;
// --- FIN STYLED COMPONENTS ---

const screenVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } }
};

// --- COMPOSANT ---
// <<< Accepter 'categoryKey'
function SeriesScreen({ category, categoryKey, startGame, goToStart }) {
  // <<< État pour stocker les meilleurs scores lus
  const [highScores, setHighScores] = useState({});

  // <<< Lire les scores au chargement
  useEffect(() => {
    const scores = {};
    if (category && category.series && categoryKey) { // Ajout vérification categoryKey
      category.series.forEach((_series, index) => { // _series non utilisé mais nécessaire pour l'index
        const scoreKey = `highScore-${categoryKey}-${index}`;
        try {
          const storedScore = localStorage.getItem(scoreKey);
          if (storedScore !== null) {
            scores[index] = parseInt(storedScore, 10);
          }
        } catch (error) {
          console.error("Erreur lecture localStorage:", error);
        }
      });
    }
    setHighScores(scores);
  }, [category, categoryKey]); // Se relance si la catégorie change

  return (
    <SeriesContainer
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CategoryTitle>{category.title}</CategoryTitle>
      <Subtitle>Choisissez une série pour commencer :</Subtitle>

      <SeriesGrid>
        {category.series.map((series, index) => {
          const highScore = highScores[index];
          return (
            <SeriesButton
              key={index}
              onClick={() => startGame(index)}
            >
              Série {index + 1}
              <span>({series.length} questions)</span>
              {/* <<< Affichage conditionnel du meilleur score */}
              {highScore !== undefined && (
                <span className="high-score">🏆 {highScore}/{series.length}</span>
              )}
            </SeriesButton>
          );
        })}
      </SeriesGrid>

      <BackButton onClick={goToStart}>
        &larr; Retour aux catégories
      </BackButton>
    </SeriesContainer>
  );
}

export default SeriesScreen;