// --- 1. Structures de Données (Les Questions) ---
// Un tableau d'objets. C'est le cœur de votre contenu.
const questions = [
    {
        question: "Quelle est la capitale du Sénégal ?",
        options: [
            { text: "Saint-Louis", correct: false },
            { text: "Dakar", correct: true },
            { text: "Ziguinchor", correct: false },
            { text: "Touba", correct: false }
        ]
    },
    {
        question: "Quel est le plus long fleuve d'Afrique de l'Ouest ?",
        options: [
            { text: "Le fleuve Sénégal", correct: false },
            { text: "Le fleuve Gambie", correct: false },
            { text: "Le fleuve Niger", correct: true },
            { text: "Le fleuve Volta", correct: false }
        ]
    },
    {
        question: "En quelle année le Sénégal a-t-il obtenu son indépendance ?",
        options: [
            { text: "1958", correct: false },
            { text: "1962", correct: false },
            { text: "1960", correct: true },
            { text: "1955", correct: false }
        ]
    },
    // Ajoutez autant de questions que vous voulez ici...
];

// --- 2. Sélection des Éléments du DOM ---
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const scoreTextElement = document.getElementById('score-text');
const totalQuestionsTextElement = document.getElementById('total-questions-text');
const restartBtn = document.getElementById('restart-btn');

// --- 3. Variables d'état du jeu ---
let currentQuestionIndex; // L'index de la question actuelle
let score; // Le score du joueur

// --- 4. Gestion d'événements ---
// Démarrer le jeu au chargement de la page
document.addEventListener('DOMContentLoaded', startGame);

// Gérer le clic sur le bouton "Recommencer"
restartBtn.addEventListener('click', startGame);

// --- 5. Fonctions principales ---

/**
 * Initialise ou réinitialise le jeu.
 */
function startGame() {
    console.log("Le jeu démarre !");
    currentQuestionIndex = 0;
    score = 0;
    
    // Cacher les résultats et montrer le quiz
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    questionContainer.classList.remove('hide'); // Assurez-vous qu'il est visible
    
    // Afficher la première question
    showQuestion(questions[currentQuestionIndex]);
}

/**
 * Affiche une question et ses options de réponse.
 * @param {object} question - L'objet question à afficher.
 */
function showQuestion(question) {
    // Réinitialiser l'état précédent (boutons)
    resetState();

    // **Manipulation du DOM** : Afficher le texte de la question
    questionTextElement.innerText = question.question;

    // **Manipulation du DOM** : Créer les boutons pour chaque option
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');

        // Stocker la bonne réponse sur le bouton (data-attribute)
        if (option.correct) {
            button.dataset.correct = true;
        }

        // **Gestion d'événements** : Ajouter un écouteur de clic
        button.addEventListener('click', selectAnswer);
        
        answerButtonsElement.appendChild(button);
    });
}

/**
 * Réinitialise le conteneur des réponses avant d'afficher la nouvelle question.
 */
function resetState() {
    // Enlever tous les anciens boutons de réponse
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Fonction appelée lors du clic sur une réponse.
 * @param {Event} e - L'événement de clic.
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // **Logique conditionnelle** : Vérifier la réponse
    if (isCorrect) {
        score++; // Mettre à jour le score
        selectedButton.classList.add('correct'); // Feedback visuel
    } else {
        selectedButton.classList.add('incorrect'); // Feedback visuel
    }

    // Désactiver tous les boutons après la sélection
    Array.from(answerButtonsElement.children).forEach(button => {
        // Montrer la bonne réponse si l'utilisateur s'est trompé
        if (button.dataset.correct === "true" && !isCorrect) {
            button.classList.add('correct');
        }
        button.disabled = true; // Empêche de cliquer à nouveau
    });

    // Attendre un court instant avant de passer à la suite
    setTimeout(goToNextQuestion, 1000); // 1 seconde de feedback
}

/**
 * Gère la transition vers la question suivante ou la fin du jeu.
 */
function goToNextQuestion() {
    currentQuestionIndex++; // Passer à la question suivante

    // **Logique conditionnelle**
    if (currentQuestionIndex < questions.length) {
        // S'il reste des questions
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Si c'est la fin du quiz
        showResults();
    }
}

/**
 * Affiche l'écran des résultats finaux.
 */
function showResults() {
    // Cacher le conteneur des questions
    quizContainer.classList.add('hide'); // Ou juste questionContainer.classList.add('hide');

    // **Manipulation du DOM** : Afficher le score final
    scoreTextElement.innerText = score;
    totalQuestionsTextElement.innerText = questions.length;

    // Afficher le conteneur des résultats
    resultsContainer.classList.remove('hide');
}