console.log("I am now in test.js");

// select div container by class
let questionContainer = document.querySelector(".container");

// select div question-container by ID
let questionContainerElement = document.querySelector("#question-container");

// select div question by ID, h1 question element
let questionElement = document.querySelector("#question");

// select the div answers by ID
let answerButtonElement = document.querySelector("#answer-buttons");

// select div welcome message by class
let startButtonContainer = document.querySelector(".controls");

// generate random question order undefined
let randomQuestion, currentQuestionIndex;

let questionsBank = [
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

let time = 10;
let timerEl = document.querySelector("#timer");
// score system
let score = 0;
let scores = [];
let i = 0;

startGame();

// possible function for start the game
function startGame() {
  timer();

  // sort 1 question in the questions using arrow function, Math.random = number (1-0) - .5 = 50% + or - number
  let randomQuestion = questionsBank.sort(() => Math.random() - 0.5);

  // set the current question to 0 (first question)
  let currentQuestionIndex = 0;
  showQuestion(randomQuestion[currentQuestionIndex]);
}

// showQuestion function take 'question' object from array
function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;

  console.log("CURRENT QUESTION", question);

  // add the answers with function to create buttons for each
  // same but as for loop
  question.answers.forEach((answer) => {
    let answerButton = document.createElement("button");
    answerButton.innerText = answer.text;
    answerButton.classList.add("btn");

    if (answer.correct == true) {
      // add 'true' class to button
      answerButton.classList.add("correct");
    } else {
      // add 'wrong' class to button
      answerButton.classList.add("wrong");
    }

    answerButton.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(answerButton);
  });
}

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
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

// do something when we select the answer
function selectAnswer(e) {
  let selectedButton = e.target;
  console.log("CORRECT ANSWER", selectedButton.dataset.correct);
  let correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  // if i click on button, we need a list of classes on that button

  // if button has a class of 'correct'. Then, add points, and other stuff for correct answer
  // else, take away time

  // move to next question

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
}

// add classes to change color of correct and wrong answers
// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("wrong");
//   }
// }

// // remove classes for new question
// function clearStatusClass(element) {
//   element.classList.remove("correct");
//   element.classList.remove("wrong");
// }

//timer function
function timer() {
  let timeInterval = setInterval(function () {
    timerEl.innerHTML = "Timer: " + time + " seconds";
    time--;

    if (time <= -1 || time === 0) {
      timerEl.innerHTML = "Game Over!";
      clearInterval(timeInterval);
      // endGame();
    }
  }, 1000);
}
