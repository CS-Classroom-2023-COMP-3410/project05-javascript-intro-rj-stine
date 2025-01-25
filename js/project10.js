const textToTypeElement = document.getElementById("text-to-type");
const userInput = document.getElementById("user-input");
const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const resultsContainer = document.getElementById("results");

let targetText = "";
let startTime = null;
let timer = null;

// Text strings for different difficulties
const texts = {
  easy: [
    "The cat sat on the mat.",
    "I love to eat apples and bananas.",
    "Typing is fun and easy to learn.",
  ],
  medium: [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Typing tests improve your speed and accuracy.",
  ],
  hard: [
    "Complex sentences require attention and focus to type correctly.",
    "Special characters like @#$% and long words make typing challenging.",
    "Practicing harder sentences builds speed and precision over time.",
  ],
};

// Generate a random text string based on difficulty
function generateText(difficulty) {
  const strings = texts[difficulty];
  return strings[Math.floor(Math.random() * strings.length)];
}

// Start the typing trainer
function startTrainer() {
  targetText = generateText(difficultySelect.value);
  textToTypeElement.innerHTML = formatHighlightedText(""); // Reset highlighted text
  userInput.value = "";
  userInput.disabled = false;
  userInput.focus();
  startTime = Date.now();
  timer = setInterval(updateResults, 100); // Update results periodically
  resultsContainer.style.display = "none";
}

// Highlight mistyped letters in real time
function formatHighlightedText(inputText) {
  let formattedText = "";

  for (let i = 0; i < targetText.length; i++) {
    const char = targetText[i];
    const typedChar = inputText[i];

    if (typedChar === undefined) {
      formattedText += `<span>${char}</span>`;
    } else if (typedChar === char) {
      formattedText += `<span class="correct">${char}</span>`;
    } else {
      formattedText += `<span class="incorrect">${char}</span>`;
    }
  }

  return formattedText;
}

// Update WPM and accuracy in real time
function updateResults() {
  const elapsedTime = (Date.now() - startTime) / 1000 / 60; // Time in minutes
  const wordsTyped = userInput.value.trim().split(" ").length;

  const wpm = Math.round(wordsTyped / elapsedTime);

  const typedText = userInput.value;
  const correctChars = [...typedText].filter((char, i) => char === targetText[i]).length;
  const accuracy = Math.round((correctChars / targetText.length) * 100);

  textToTypeElement.innerHTML = formatHighlightedText(typedText); // Highlight mistyped letters

  wpmElement.textContent = `WPM: ${wpm}`;
  accuracyElement.textContent = `Accuracy: ${accuracy}%`;
}

// End the typing trainer
function endTrainer() {
  const elapsedTime = (Date.now() - startTime) / 1000 / 60; // Time in minutes
  const wordsTyped = userInput.value.trim().split(" ").length;

  const wpm = Math.round(wordsTyped / elapsedTime);
  const typedText = userInput.value;
  const correctChars = [...typedText].filter((char, i) => char === targetText[i]).length;
  const accuracy = Math.round((correctChars / targetText.length) * 100);

  wpmElement.textContent = `WPM: ${wpm}`;
  accuracyElement.textContent = `Accuracy: ${accuracy}%`;
  resultsContainer.style.display = "block";
  userInput.disabled = true;
  clearInterval(timer);
}

// Handle "Enter" key press to end the trainer
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the newline in the text area
    endTrainer();
  }
});

// Restart the typing trainer
function restartTrainer() {
  startTrainer();
}

// Event listeners
startButton.addEventListener("click", startTrainer);
restartButton.addEventListener("click", restartTrainer);
