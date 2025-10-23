# Quizz Sénégal - Teranga Vision 🇸🇳

## Description

**Teranga Vision** est une application web de quizz interactif conçue dans un **but didactique** pour tester et améliorer les connaissances sur la culture générale, l'histoire, la géographie et d'autres aspects du **Sénégal** et de l'**Afrique**. Le projet vise à promouvoir le savoir de manière ludique et engageante.

L'application est développée avec des technologies web modernes et met l'accent sur une expérience utilisateur agréable et instructive.

---

## Fonctionnalités Implémentées 

* **Quiz Multi-Catégories :** Questions organisées par thèmes (Géographie Sénégalaise, Culture & Gastronomie, Histoire & Personnalités, Cas & Culture Tiktok Senegal).
* **Système de Séries :** Chaque catégorie est divisée en plusieurs séries de questions (5 questions par série actuellement) pour une progression plus gérable.
* **Questions à Choix Multiples (QCM) :** Format classique et intuitif.
* **Contre-la-Montre :** Chaque question dispose d'un temps limité (timer visuel) pour y répondre.
* **Explications Détaillées :** Après chaque réponse (bonne ou mauvaise), une explication est fournie pour renforcer l'apprentissage. 💡
* **Calcul du Score :** Suivi du score pour chaque série jouée.
* **Feedback Visuel & Messages :** Indication immédiate de la bonne/mauvaise réponse et message personnalisé sur l'écran des résultats en fonction du score.
* **Sauvegarde du Meilleur Score :** Le meilleur score obtenu pour chaque série est enregistré localement (`localStorage`) et affiché sur l'écran de sélection des séries. 🏆
* **Randomisation :**
    * L'ordre des questions est mélangé à chaque lancement d'une série.
    * L'ordre des options de réponse est mélangé pour chaque question. 🎲
* **Effets Sonores :** Des sons accompagnent les clics, les bonnes et mauvaises réponses pour une meilleure immersion. 🔊
* **Revue des Erreurs :** Possibilité de revoir les questions manquées à la fin d'une série, avec la bonne réponse et l'explication. 🧐
* **Partage du Score :** Un bouton sur l'écran des résultats permet de partager son score via l'API Web Share native du navigateur/mobile. 🔗
* **Design Thématique :** Interface inspirée des couleurs et de l'ambiance sénégalaises/africaines.
* **Animations :** Transitions fluides entre les différents écrans de l'application grâce à Framer Motion.
* **Gestion du Consentement :** Une bannière demande le consentement de l'utilisateur pour les cookies (notamment pour l'analyse d'audience). 🍪
* **Analyse d'Audience (Conditionnelle) :** Intégration de Google Analytics (GA4) pour suivre l'utilisation de l'application, activée uniquement après consentement.

---

## Technologies Utilisées 

* **Frontend :** React.js (via Vite.js)
* **Styling :** Styled-Components (CSS-in-JS)
* **Animation :** Framer Motion
* **Analyse :** ReactGA4 (pour Google Analytics)
* **Consentement :** React Cookie Consent, js-cookie
* **Déploiement :** Netlify

---

## Installation (Pour Développement)

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/Ababacar22/Sengame.git
    ```
2.  Naviguez dans le dossier :
    ```bash
    cd mon-quiz-senegal 
    ```
    
3.  Installez les dépendances :
    ```bash
    npm install
    ```
4.  Lancez le serveur de développement :
    ```bash
    npm run dev
    ```

---

## Crédits 👨‍💻

Ce jeu a été développé par **Khalifa Ababacar DIALLO** dans le but d'améliorer la culture générale tout en garantissant un divertissement.

* **Contact pro :** <khalifa.a.diallo@outlook.fr>
* **Portfolio/Site :** [Mon site](https://kdiallo.netlify.app) 

---
