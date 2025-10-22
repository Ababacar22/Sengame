// src/components/StartScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { quizzes } from '../data/questions';
import heroImage from '../assets/rose.jpg'; // Vérifiez le chemin
import { motion } from 'framer-motion'; // <<< 1. Importer motion

// --- STYLED COMPONENTS ---

// <<< 2. Conteneur racine devient motion.div
const StartContainer = styled(motion.div)`
  text-align: center;
  /* Pas besoin de padding ici, il sera dans StartContentWrapper */
`;

// <<< 3. HeroImage: Retirer marges négatives et border-radius inutile
const HeroImage = styled.img`
  width: 100%;
  height: 180px; /* J'ai remis 180px, ajustez si besoin */
  object-fit: cover;
  display: block; /* Évite espace blanc sous l'image */
  /* border-radius: 12px 12px 0 0; Supprimé car géré par QuizCard */
  /* margin: ... Supprimé */
  margin-bottom: 2rem; /* Juste l'espace avant le titre */
`;

// <<< 4. Nouveau : Wrapper pour le contenu SOUS l'image (avec padding)
const StartContentWrapper = styled.div`
  padding: 0 2rem 2rem 2rem; /* Padding G/D/Bas, mais pas Haut */
`;


const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.ochre};
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CategoryButton = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.green};
  color: white;
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1.25rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    background-color: #007336;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`;

const DevCredit = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.light};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.gray};
  line-height: 1.6;

  strong {
    color: ${props => props.theme.colors.dark};
  }

  a {
    color: ${props => props.theme.colors.ochre};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
// --- FIN STYLED COMPONENTS ---

// <<< 5. Définition des variantes d'animation (Exemple simple : fondu)
const screenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

// --- COMPOSANT ---
function StartScreen({ selectCategory }) {
  const categories = Object.keys(quizzes);

  return (
    // <<< 6. Application des props d'animation
    <StartContainer
      variants={screenVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroImage src={heroImage} alt="Illustration Quiz Sénégal" />

      {/* Le reste du contenu va dans le wrapper paddé */}
      <StartContentWrapper>
        <Title>Quizz: Teranga Vision</Title>
        <Subtitle>Choisissez une catégorie pour tester vos connaissances !</Subtitle>

        <CategoryGrid>
          {categories.map((categoryKey) => (
            <CategoryButton
              key={categoryKey}
              onClick={() => selectCategory(categoryKey)}
            >
              {quizzes[categoryKey].title}
            </CategoryButton>
          ))}
        </CategoryGrid>

        <DevCredit>
          <p>Ce jeu a été développé par <strong>Khalifa Ababacar DIALLO</strong> afin d'améliorer la culture générale tout en garantissant un divertissement.</p>
          <p>Contact pro : <a href="mailto:khalifa.a.diallo@outlook.fr">khalifa.a.diallo@outlook.fr</a></p>
        </DevCredit>
      </StartContentWrapper>

    </StartContainer>
  );
}
export default StartScreen;