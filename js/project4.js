const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correct: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = [];
  
  const quizContainer = document.getElementById("quiz");
  const feedbackContainer = document.getElementById("feedback");
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");
  const resultsContainer = document.getElementById("results");
  const scoreContainer = document.getElementById("score");
  const reviewContainer = document.getElementById("review");
  const restartButton = document.getElementById("restart-button");
  
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <div class="question">${questionData.question}</div>
      <ul class="choices">
        ${questionData.choices
          .map(
            (choice, index) => `
          <li>
            <label>
              <input type="radio" name="choice" value="${index}">
              ${choice}
            </label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
    feedbackContainer.textContent = "";
  }
  
  function showFeedback(isCorrect) {
    feedbackContainer.textContent = isCorrect ? "Correct!" : "Wrong answer.";
    feedbackContainer.style.color = isCorrect ? "green" : "red";
  }
  
  function handleNextQuestion() {
    const selectedChoice = document.querySelector("input[name='choice']:checked");
    if (!selectedChoice) {
      alert("Please select an answer.");
      return;
    }
  
    const selectedAnswer = parseInt(selectedChoice.value);
    userAnswers[currentQuestionIndex] = selectedAnswer;
  
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score++;
      showFeedback(true);
    } else {
      showFeedback(false);
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    }
  }
  
  function handleSubmitQuiz() {
    quizContainer.style.display = "none";
    feedbackContainer.style.display = "none";
    submitButton.style.display = "none";
  
    scoreContainer.textContent = `Your score: ${score}/${questions.length}`;
    reviewContainer.innerHTML = questions
      .map((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;
        return `
          <div>
            <p><strong>Q:</strong> ${q.question}</p>
            <p><strong>Your Answer:</strong> ${
              q.choices[userAnswer] || "No answer"
            }</p>
            <p><strong>Correct Answer:</strong> ${q.choices[correctAnswer]}</p>
          </div>
        `;
      })
      .join("");
    resultsContainer.style.display = "block";
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    resultsContainer.style.display = "none";
    quizContainer.style.display = "block";
    feedbackContainer.style.display = "block";
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", handleNextQuestion);
  submitButton.addEventListener("click", handleSubmitQuiz);
  restartButton.addEventListener("click", restartQuiz);
  
  // Start the quiz
  loadQuestion();
  