const storyContainer = document.getElementById("story-container");
const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");
const restartButton = document.getElementById("restart-button");
const saveButton = document.getElementById("save-button");
const resumeButton = document.getElementById("resume-button");

// Story data
const story = {
  start: {
    text: "You find yourself in a dark forest. Two paths lie ahead: one to the left and one to the right.",
    choices: [
      { text: "Take the left path", next: "left_path" },
      { text: "Take the right path", next: "right_path" },
    ],
  },
  left_path: {
    text: "You encounter a wild wolf. Do you fight it or run away?",
    choices: [
      { text: "Fight the wolf", next: "fight_wolf" },
      { text: "Run away", next: "run_away" },
    ],
  },
  right_path: {
    text: "You find a treasure chest. Do you open it or leave it alone?",
    choices: [
      { text: "Open the chest", next: "open_chest" },
      { text: "Leave it alone", next: "leave_chest" },
    ],
  },
  fight_wolf: {
    text: "You defeat the wolf but suffer some injuries. You see a cabin nearby. Do you enter?",
    choices: [
      { text: "Enter the cabin", next: "cabin" },
      { text: "Keep walking", next: "keep_walking" },
    ],
  },
  run_away: {
    text: "You safely escape but feel uneasy. Do you continue down the path or return home?",
    choices: [
      { text: "Continue down the path", next: "keep_walking" },
      { text: "Return home", next: "home" },
    ],
  },
  open_chest: {
    text: "The chest is filled with gold! You win the game.",
    choices: [],
  },
  leave_chest: {
    text: "You walk away, leaving the treasure behind. You feel a sense of regret.",
    choices: [],
  },
  cabin: {
    text: "You find food and rest in the cabin. You win the game.",
    choices: [],
  },
  keep_walking: {
    text: "You wander the forest for hours and eventually find your way out.",
    choices: [],
  },
  home: {
    text: "You safely return home, vowing never to enter the forest again.",
    choices: [],
  },
};

let currentScene = "start";

// Render the story and choices
function renderScene() {
  const scene = story[currentScene];
  storyText.textContent = scene.text;

  choicesContainer.innerHTML = "";
  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      currentScene = choice.next;
      renderScene();
    });
    choicesContainer.appendChild(button);
  });
}

// Save the current scene to localStorage
function saveProgress() {
  localStorage.setItem("currentScene", currentScene);
  alert("Progress saved!");
}

// Resume the game from saved progress
function resumeProgress() {
  const savedScene = localStorage.getItem("currentScene");
  if (savedScene) {
    currentScene = savedScene;
    renderScene();
  } else {
    alert("No saved progress found.");
  }
}

// Restart the game
function restartGame() {
  currentScene = "start";
  renderScene();
}

// Attach event listeners
restartButton.addEventListener("click", restartGame);
saveButton.addEventListener("click", saveProgress);
resumeButton.addEventListener("click", resumeProgress);

// Initialize the game
renderScene();
