const board = document.getElementById('game-board');
const moveCounter = document.getElementById('move-counter');
const timerDisplay = document.getElementById('timer');
const restartButton = document.getElementById('restart-button');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = null;
let seconds = 0;

// Generate card content
const generateCards = () => {
    const symbols = ['🍎', '🍌', '🍒', '🍇', '🍓', '🍉', '🍍', '🥝'];
    const pairs = [...symbols, ...symbols]; // Duplicate symbols for pairs
    return pairs.sort(() => Math.random() - 0.5); // Shuffle the cards
};

// Update timer display
const updateTimer = () => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    timerDisplay.textContent = `${minutes}:${sec.toString().padStart(2, '0')}`;
};

// Start timer
const startTimer = () => {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
};

// Stop timer
const stopTimer = () => {
    clearInterval(timer);
    timer = null;
};

// Reset game
const resetGame = () => {
    board.innerHTML = '';
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    seconds = 0;
    moveCounter.textContent = moves;
    timerDisplay.textContent = '0:00';
    stopTimer();
    initializeGame();
};

// Flip card
const flipCard = (cardElement) => {
    if (flippedCards.length < 2 && !cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
};

// Check for match
const checkMatch = () => {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.querySelector('.card-content').textContent;
    const symbol2 = card2.querySelector('.card-content').textContent;

    if (symbol1 === symbol2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        if (matchedPairs === cards.length / 2) {
            stopTimer();
            alert(`You won! Time: ${timerDisplay.textContent}, Moves: ${moves}`);
        }
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
    moves++;
    moveCounter.textContent = moves;
};

// Initialize game
const initializeGame = () => {
    const cardSymbols = generateCards();
    cardSymbols.forEach((symbol) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="card-content">${symbol}</div>`;
        card.addEventListener('click', () => {
            startTimer();
            flipCard(card);
        });
        cards.push(card);
        board.appendChild(card);
    });
};

// Event listener for restart button
restartButton.addEventListener('click', resetGame);

// Start the initial game
initializeGame();
