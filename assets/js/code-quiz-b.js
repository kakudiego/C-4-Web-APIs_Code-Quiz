// select the start button
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");

// select the leaderboard button
const leaderboardBtn = document.querySelector("#leaderboard");

// select div container by class
const questionContainer = document.querySelector(".container");

// select div question-container by ID
const questionContainerElement = document.querySelector("#question-container");

// select div question by ID, h1 question element
const questionElement = document.querySelector("#question");

// select the div answers by ID
const answerButtonElement = document.querySelector("#answer-buttons");

// select div welcome message by class
const startButtonContainer = document.querySelector(".controls");

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
startButtonContainer.appendChild(codeQuizDescription);
startButtonContainer.appendChild(codeQuizWelcome);

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
      correctAnswer();
    }
    // wrong answer
    if (answer.correct) {
      answerButton.dataset.correct != answer.correct;
      wrongAnswers();
    }
    answerButton.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(answerButton);
  });
}

// score system
let score = 0;
let scores = [];
let i = 0;

function correctAnswer() {
  // add to score
  score++;
  console.log(score);
}

function wrongAnswers() {
  // subtract 5
  time = time - 5;
  console.log(time);
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
let time = 5;
let timerEl = document.querySelector("#timer");
function timer() {
  let timeInterval = setInterval(function () {
    timerEl.innerHTML = "Timer: " + time + " seconds";
    time--;

    if (time <= -1 || time === 0) {
      timerEl.innerHTML = "Game Over!";
      clearInterval(timeInterval);
      formEl.classList.remove("hide");
      endGame();
    }
  }, 1000);
}

// endGame function
function endGame() {
  // replace div question container with text
  questionElement.innerHTML = "<h1>Done!</h1>";

  // final score
  let finalScore = document.querySelector("#answer-buttons");
  finalScore.innerHTML = "<h2>Final Score = " + score + "!</h2>";

  // form element
  let formEl = document.querySelector("#form");
  formEl.addEventListener("submit", leaderboard);
}

// leaderboard function
let leaderboard = function (event) {
  // prevent reload page
  event.preventDefault();
  questionElement.innerHTML = "<h1>Leaderboard</h1>";
  formEl.classList.add("hide");

  // add initial input and make it a string
  let initialsInput = document.querySelector("input[name='initial']").value;
  let scoreObj = {
    name: initialsInput,
    scoreOf: score.toString(),
  };

  if (!initialsInput) {
    alert("You must provide your initials!");
    return false;
  }

  let highScores = localStorage.getItem("highScores");
  let highScore = JSON.parse(highScores);

  if (highScore == null) {
    highScore = [];
  }

  highScore.push(scoreObj);

  for (let i = 0; i < highScore.length; i++) {
    let highScoreLi = document.createElement("li");
    highScoreLi.id = "highScoreLiId";
    highScoreLi.textContent = highScore[i].name + " - " + highScore[i].scoreOf;
    document.getElementById("results").appendChild(highScoreLi);
  }

  localStorage.setItem("highScores", JSON.stringify(highScore));
  document.getElementById("initialsInput").remove();
};

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
];
