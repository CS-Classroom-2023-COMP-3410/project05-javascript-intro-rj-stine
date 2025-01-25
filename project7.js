const display = document.getElementById("display");
const calculationDisplay = document.createElement("div"); // Create a new display for the ongoing calculation
calculationDisplay.classList.add("calculation-display");
display.parentNode.insertBefore(calculationDisplay, display);

let currentInput = "";
let previousInput = "";
let operator = null;
let memory = 0;

// Handle button clicks
document.querySelectorAll(".btn").forEach((button) =>
  button.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    handleInput(action);
  })
);

function handleInput(action) {
  if (!isNaN(action) || action === "decimal") {
    updateInput(action);
  } else if (["add", "subtract", "multiply", "divide"].includes(action)) {
    setOperator(action);
  } else if (action === "equals") {
    calculate();
  } else if (action === "clear") {
    clearAll();
  } else if (action === "sqrt") {
    calculateSquareRoot();
  } else if (action === "percent") {
    calculatePercentage();
  } else if (action === "memory-recall") {
    recallMemory();
  }
}

function updateInput(value) {
  if (value === "decimal") {
    if (!currentInput.includes(".")) {
      currentInput += ".";
    }
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function setOperator(action) {
  if (currentInput) {
    if (previousInput && operator) {
      calculate();
    }
    previousInput = currentInput;
    currentInput = "";
    operator = action;
    updateDisplay();
  }
}

function calculate() {
  if (!operator || !previousInput || !currentInput) return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 === 0 ? "Error" : num1 / num2; // Handle division by zero
      break;
  }

  if (result !== "Error") memory = result;
  currentInput = result.toString();
  previousInput = "";
  operator = null;
  updateDisplay();
}

function clearAll() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay("0");
}

function calculateSquareRoot() {
  if (currentInput) {
    const num = parseFloat(currentInput);
    if (num >= 0) {
      currentInput = Math.sqrt(num).toString();
      updateDisplay();
    } else {
      updateDisplay("Error");
    }
  }
}

function calculatePercentage() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

function recallMemory() {
  currentInput = memory.toString();
  updateDisplay();
}

function updateDisplay() {
  const operatorSymbol = operator
    ? { add: "+", subtract: "−", multiply: "×", divide: "÷" }[operator]
    : "";

  calculationDisplay.textContent = `${previousInput} ${operatorSymbol} ${currentInput}`;
  display.textContent = currentInput || "0";
}
