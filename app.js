// App Logic

// State
let currentQuestion = "";
let currentType = "";
let drawnCards = [];

// DOM Elements
const screens = {
    home: document.getElementById('home'),
    question: document.getElementById('question'),
    drawing: document.getElementById('drawing'),
    result: document.getElementById('result'),
    premium: document.getElementById('premium')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initButtons();
});

// Initialize all buttons
function initButtons() {
    // Home screen type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentType = btn.dataset.type;
            showScreen('question');
        });
    });

    // Draw button
    const drawBtn = document.getElementById('draw-btn');
    if (drawBtn) {
        drawBtn.addEventListener('click', startDrawing);
    }

    // Restart button
    const restartBtn = document.querySelector('.restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restart);
    }

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => showScreen('home'));
    });

    // Premium button
    const premiumBtn = document.querySelector('.premium-btn');
    if (premiumBtn) {
        premiumBtn.addEventListener('click', showPremium);
    }
}

// Show specific screen
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });

    // Show target screen
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Start drawing animation
function startDrawing() {
    const questionInput = document.getElementById('user-question');
    if (questionInput) {
        currentQuestion = questionInput.value.trim();
    }

    showScreen('drawing');

    // Animation duration
    setTimeout(() => {
        drawCard();
    }, 2500);
}

// Draw a single card
function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotData.majorArcana.length);
    const card = tarotData.majorArcana[randomIndex];

    drawnCards = [card];

    displayResult(card);
}

// Display result
function displayResult(card) {
    showScreen('result');

    // Update card display
    const cardImage = document.getElementById('card-image');
    const cardName = document.getElementById('card-name');
    const cardMeaning = document.getElementById('card-meaning');
    const cardAdvice = document.getElementById('card-advice');
    const resultTitle = document.getElementById('result-title');

    if (cardImage) {
        cardImage.innerHTML = `<img src="${card.image}" alt="${card.name}" loading="lazy">`;
    }

    if (cardName) {
        cardName.textContent = `${card.name} (${card.nameEn})`;
    }

    if (resultTitle) {
        const typeEmojis = {
            love: "💕 愛情",
            career: "💼 事業",
            wealth: "💰 財運",
            general: "✨ 整體"
        };
        resultTitle.textContent = `${typeEmojis[currentType] || '✨'} 運勢`;
    }

    if (cardMeaning) {
        cardMeaning.textContent = card.meaning;
    }

    if (cardAdvice) {
        cardAdvice.textContent = card.advice;
    }

    // Update card position
    const cardPosition = document.getElementById('card-position');
    if (cardPosition) {
        cardPosition.textContent = "正位";
    }
}

// Show premium section
function showPremium() {
    showScreen('premium');
}

// Restart divination
function restart() {
    // Reset state
    currentQuestion = "";
    currentType = "";
    drawnCards = [];

    // Clear input
    const questionInput = document.getElementById('user-question');
    if (questionInput) {
        questionInput.value = "";
    }

    // Go back to home
    showScreen('home');
}

// Expose functions to global scope for onclick handlers
window.showScreen = showScreen;
window.showPremium = showPremium;
window.restart = restart;
