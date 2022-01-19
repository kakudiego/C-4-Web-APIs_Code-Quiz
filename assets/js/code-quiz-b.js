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
codeQuizWelcome.setAttribute("id", "codeh1");
const codeQuizDescription = document.createElement("h2");
codeQuizDescription.setAttribute("id", "codeh2");
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";

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
  //timer();
}

// possible function for the next question
function setNextQuestion() {
  showQuestion(randomQuestion[currentQuestionIndex]);
}

// showQuestion function take 'question' object from array
function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;

  // add the answers with function to create buttons for each
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    // only for the correct answer
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
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

  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  // need to check how many questions
  if (randomQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//timer function
let timerEl = document.querySelector("#timer");
let time = 5;
function timer() {
  let timeInterval = setInterval(function () {
    timerEl.textContent = "Timer: " + time;
    time--;

    if (time < -1) {
      alert("Times Up!");
      clearInterval(timeInterval);
      timerEl.textContent = "Timer: 60";
    }
  }, 1000);
}

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
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      { text: "Math.round(7.25)", correct: true },
      { text: "round(7.25)", correct: false },
      { text: "Math.rnd(7.25)", correct: false },
      { text: "rnd(7.25)8", correct: false },
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
