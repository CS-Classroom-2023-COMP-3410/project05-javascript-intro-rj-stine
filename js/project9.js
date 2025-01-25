const arrayContainer = document.getElementById("array-container");
const algorithmSelect = document.getElementById("algorithm-select");
const speedSlider = document.getElementById("speed-slider");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const commentary = document.getElementById("commentary");

let array = [];
let animationSpeed = 500;
let isSorting = false;

// Generate a random array
function generateArray(size = 20) {
  if (isSorting) {
    isSorting = false; // Stop ongoing sorting
    commentary.textContent = "Sorting stopped. Generating a new array...";
  }
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
}

// Render the array as bars
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  });
}

// Sleep function for animations
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Bubble sort algorithm with animations
async function bubbleSort() {
  isSorting = true; // Mark sorting as active
  commentary.textContent = "Starting Bubble Sort...";
  const bars = document.querySelectorAll(".array-bar");

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (!isSorting) return; // Exit if sorting is stopped

      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      if (array[j] > array[j + 1]) {
        // Swap the bars
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderArray();
        await sleep(animationSpeed);
      }

      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
    }
  }

  commentary.textContent = "Bubble Sort Completed!";
  isSorting = false; // Mark sorting as inactive
}

// Insertion sort algorithm with animations
async function insertionSort() {
  isSorting = true; // Mark sorting as active
  commentary.textContent = "Starting Insertion Sort...";
  const bars = document.querySelectorAll(".array-bar");

  for (let i = 1; i < array.length; i++) {
    if (!isSorting) return; // Exit if sorting is stopped

    let key = array[i];
    let j = i - 1;

    bars[i].classList.add("active");
    while (j >= 0 && array[j] > key) {
      if (!isSorting) return; // Exit if sorting is stopped

      array[j + 1] = array[j];
      renderArray();
      await sleep(animationSpeed);
      bars[j].classList.add("active");
      j--;
    }
    array[j + 1] = key;

    bars[i].classList.remove("active");
  }

  commentary.textContent = "Insertion Sort Completed!";
  isSorting = false; // Mark sorting as inactive
}

// Start sorting
function startSorting() {
  if (isSorting) {
    commentary.textContent = "Sorting is already in progress.";
    return;
  }

  const algorithm = algorithmSelect.value;
  if (algorithm === "bubble") {
    bubbleSort();
  } else if (algorithm === "insertion") {
    insertionSort();
  }
}

// Event listeners
startButton.addEventListener("click", startSorting);
resetButton.addEventListener("click", () => {
  generateArray();
  commentary.textContent = "Array reset. Select an algorithm and start sorting!";
});
speedSlider.addEventListener("input", (e) => {
  const maxSpeed = 2000;
  const minSpeed = 100;
  const sliderValue = parseInt(e.target.value);
  animationSpeed = maxSpeed - sliderValue + minSpeed; // Reverse the slider logic
  commentary.textContent = `Animation speed adjusted: ${animationSpeed}ms per step`;
});

// Initialize the tool
generateArray();
