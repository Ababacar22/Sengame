// src/components/StartScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { quizzes } from '../data/questions';

// Assurez-vous que le chemin est correct.
import heroImage from '../assets/sengal.png'; // (Ou le nom de l'image que vous avez choisie)

// --- STYLED COMPONENTS ---

const StartContainer = styled.div`
  text-align: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin: -2rem -2rem 0 -2rem;
  margin-bottom: 2rem;
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

// NOUVEAU : Le composant pour votre pitch et vos crédits
const DevCredit = styled.div`
  margin-top: 2.5rem; /* Espace au-dessus */
  padding-top: 1.5rem; /* Ligne de séparation */
  border-top: 1px solid ${props => props.theme.colors.light}; /* Couleur sable/clair */
  font-size: 0.9rem;
  color: ${props => props.theme.colors.gray}; /* Couleur grise douce */
  line-height: 1.6;

  strong {
    color: ${props => props.theme.colors.dark}; /* Nom en plus foncé */
  }

  a {
    color: ${props => props.theme.colors.ochre}; /* Lien avec la couleur ocre */
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;


// --- COMPOSANT ---

function StartScreen({ startGame }) {
  const categories = Object.keys(quizzes);

  return (
    <StartContainer>
      
      <HeroImage src={heroImage} alt="Illustration Quiz Sénégal" />

      <Title>Quiz: Teranga Vision</Title>
      <Subtitle>Choisissez une catégorie pour tester vos connaissances !</Subtitle>
      
      <CategoryGrid>
        {categories.map((categoryKey) => (
          <CategoryButton 
            key={categoryKey}
            onClick={() => startGame(categoryKey)}
          >
            {quizzes[categoryKey].title}
          </CategoryButton>
        ))}
      </CategoryGrid>

      {/* NOUVEAU : Le bloc de crédits est ajouté ici */}
      <DevCredit>
        <p>Ce jeu a été développé par <strong>Khalifa Ababacar DIALLO</strong> afin d'améliorer la culture générale tout en garantissant un divertissement.</p>
        <p>Contact pro : <a href="mailto:khalifa.a.diallo@outlook.fr">khalifa.a.diallo@outlook.fr</a></p>
      </DevCredit>

    </StartContainer>
  );
}
export default StartScreen;