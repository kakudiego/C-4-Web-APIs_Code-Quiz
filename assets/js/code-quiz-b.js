// select various buttons
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const submitButton = document.querySelector("#submit");
const leaderboardBtn = document.querySelector("#leaderboard");

// select all div container
const leaderboardPage = document.querySelector(".leaderboard");
const questionContainer = document.querySelector(".container");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonElement = document.querySelector("#answer-buttons");
const controlsElements = document.querySelector(".controls");

// generate random question order undefined
let randomQuestion, currentQuestionIndex;

//create first screen text
const body = document.body;
const codeQuizWelcome = document.createElement("h1");
codeQuizWelcome.id = "codeh1";
const codeQuizDescription = document.createElement("h2");
codeQuizDescription.id = "codeh2";
codeQuizWelcome.innerText = "Coding Quiz Challenge";
codeQuizDescription.innerText = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";

// welcome message
controlsElements.appendChild(codeQuizDescription);
controlsElements.appendChild(codeQuizWelcome);

// questionsBank pool, array of objects with 3 properties each
const questionsBank = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<javascript>", correct: false },
    ],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'msgBox("Hello World")', correct: false },
      { text: 'msg("Hello World")', correct: false },
      { text: 'alert("Hello World")', correct: true },
      { text: 'alertBox("Hello World")', correct: false },
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for i = 1 to 5", correct: false },
      { text: "for (i = 0; i <= 5; i++)", correct: true },
      { text: "for (i <= 5; i++)", correct: false },
      { text: "for (i = 0; i <= 5)", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "-", correct: false },
      { text: "x", correct: false },
      { text: "*", correct: false },
      { text: "=", correct: true },
    ],
  },
  {
    question: "How to insert a comment that has more than one line?",
    answers: [
      { text: "/*This comment has correct more than one line*/", correct: true },
      { text: "!--This comment has more than one line--!", correct: false },
      { text: "//This comment has more than one line//", correct: false },
      { text: "--This comment has more than one line--", correct: false },
    ],
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: [
      { text: "ceil(x, y)", correct: false },
      { text: "Math.max(x, y)", correct: true },
      { text: "Math.ceil(x, y)", correct: false },
      { text: "top(x, y)", correct: false },
    ],
  },
  {
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "Javascript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loop", correct: false },
      { text: "console.log", correct: true },
    ],
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ],
  },
  {
    question: "Commonly used data types do not include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: [
      { text: "if i = 5", correct: false },
      { text: "if i == 5 then", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i + 5 then", correct: false },
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "while (i <= 10)", correct: true },
      { text: "while i = 1 to 10", correct: false },
      { text: "while (i <= 10; i++)", correct: false },
      { text: "while (i <= 10 = i++)", correct: false },
    ],
  },
];

startButton.addEventListener("click", startGame);

// nextButton will add new question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// possible function for start the game
function startGame() {
  // add  class 'hide' to startButton
  startButton.classList.add("hide");

  // add class 'hide' to h1 and h2 welcome
  codeQuizWelcome.classList.add("hide");
  codeQuizDescription.classList.add("hide");

  // sort 1 question in the questions using arrow function, Math.random = number (1-0) - .5 = 50% + or - number
  randomQuestion = questionsBank.sort(() => Math.random() - 0.5);

  // set the current question to 0 (first question)
  currentQuestionIndex = 0;

  // remove class 'hide' from questionContainerElement
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  timer();
}

// function for the next question
function setNextQuestion() {
  showQuestion(randomQuestion[currentQuestionIndex]);
}

// score system
let score = 0;
let scores = [];
let i = 0;
let penalty = 10;

// showQuestion function take 'question' object from array
function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;

  // add the answers with function to create buttons for each
  question.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.innerText = answer.text;
    answerButton.classList.add("btn");

    // correct answer
    if (answer.correct) {
      answerButton.dataset.correct = answer.correct;
    }
    // wrong answer
    else {
      answerButton.dataset.correct != answer.correct;
    }
    answerButtonElement.appendChild(answerButton);
    answerButton.addEventListener("click", selectAnswer);
  });
}

// reset everything each new question
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

// do something when we select the answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  if (correct) {
    score++;
    console.log(score);
  } else {
    time = time - penalty;
    console.log(time);
  }

  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  // need to check how many questions
  if (randomQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    // change start button to restart
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }

  setTimeout(function () {
    currentQuestionIndex++;
    setNextQuestion();
  }, 500);
}

// add classes to change color of correct and wrong answers
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// remove classes for new question
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//timer function
let time = 60;
let timerEl = document.querySelector("#timer");
function timer() {
  let timeInterval = setInterval(function () {
    timerEl.innerHTML = "Timer: " + time + " seconds";
    time--;

    // call endGame when no more questions
    if (currentQuestionIndex >= randomQuestion.length) {
      // stop time
      clearInterval(timeInterval);
      endGame();
    }

    if (time <= 0 || time === 0) {
      timerEl.innerHTML = "Game Over!";
      clearInterval(timeInterval);
      formEl.classList.remove("hide");
      endGame();
    }
  }, 1000);
}

// endGame function
function endGame() {
  // show the form
  formEl.classList.remove("hide");

  // replace div question container with text
  questionElement.innerHTML = "<h1>Done!</h1>";

  // final score
  let finalScore = document.querySelector("#answer-buttons");
  finalScore.innerHTML = "<h2>Final Score = " + score + "!</h2>";

  // event listener: when initial submit button is pressed...
  formEl.addEventListener("submit", leaderboard);
  startButton.innerText = "Restart";
  startButton.classList.remove("hide");
}

// clear scores function
let clearScores = function () {
  localStorage.removeItem("highScores");
  document.getElementById("highScoreLiId").remove();
};

//function to create the final score
let leaderboard = function (event) {
  event.preventDefault();
  submitButton.classList.add("hide");
  startButton.addEventListener(
    "click",
    function () {
      location.reload(1);
    },
    1000
  );

  // clear high scores button
  let clearEl = document.createElement("button");
  clearEl.innerText = "Clear scores";
  clearEl.id = "clear";
  clearEl.classList.add("btn");
  document.getElementById("results").appendChild(clearEl);
  clearEl.addEventListener("click", clearScores);

  let initialsInput = document.querySelector("input[name='initial']").value;
  let scoreObj = {
    name: initialsInput,
    userScore: score.toString(),
  };

  if (!initialsInput) {
    alert("Initials please!");
    return false;
  }

  let highScores = localStorage.getItem("highScores");
  let storedData = JSON.parse(highScores);

  if (storedData == null) {
    storedData = [];
  }

  storedData.push(scoreObj);

  for (let i = 0; i < storedData.length; i++) {
    let scoreList = document.createElement("li");
    scoreList.id = "highScoreLiId";
    scoreList.textContent = storedData[i].name + " - " + storedData[i].userScore;
    document.querySelector("#results").appendChild(scoreList);
  }

  localStorage.setItem("highScores", JSON.stringify(storedData));
  document.querySelector("#initialsInput").remove();
};

// sadly no time to add an external leaderboard page
// let playerScore = document.querySelectorAll(".player-score");

// // leaderboard button shows list with scores
// leaderboardBtn.addEventListener("click", function () {
//   // take storedData array and insert ir into leaderboard
//   let storedData = JSON.parse(localStorage.getItem("highScores"));

//   for (let i = 0; i < storedData.length; i++) {
//     playerScore[i].innerText = `${storedData[i].name}: ${storedData[i].userScore}`;
//   }

//   location.href = "leaderboard.html";
// });
