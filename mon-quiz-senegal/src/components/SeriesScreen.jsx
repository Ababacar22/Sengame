// src/components/SeriesScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // <<< 1. Importer motion

// --- STYLED COMPONENTS ---

// <<< 2. Conteneur racine devient motion.div
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

// <<< 3. Définition des variantes d'animation (Exemple: fondu + léger zoom)
const screenVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } }
};

// --- COMPOSANT ---

function SeriesScreen({ category, startGame, goToStart }) {
  return (
    // <<< 4. Application des props d'animation
    <SeriesContainer
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CategoryTitle>{category.title}</CategoryTitle>
      <Subtitle>Choisissez une série pour commencer :</Subtitle>

      <SeriesGrid>
        {category.series.map((series, index) => (
          <SeriesButton
            key={index}
            onClick={() => startGame(index)}
          >
            Série {index + 1}
            <span>({series.length} questions)</span>
          </SeriesButton>
        ))}
      </SeriesGrid>

      <BackButton onClick={goToStart}>
        &larr; Retour aux catégories
      </BackButton>
    </SeriesContainer>
  );
}

export default SeriesScreen;