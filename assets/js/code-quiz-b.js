// select the start button

// select the start button
const startButton = document.querySelector("#start-btn");
// select the leaderboard button
const leaderboardBtn = document.querySelector("#leaderboard");
// select div container by ID
const questionContainer = document.querySelector(".container");
// select div question-container by ID
const questionContainerElement = document.querySelector("#question-container");

//create first screen text
const body = document.body;
const codeQuizWelcome = document.createElement("h1");
const codeQuizDescription = document.createElement("p");
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";
body.appendChild(codeQuizWelcome);
body.appendChild(codeQuizDescription);

startButton.addEventListener("click", startGame);

// possible function for start the game
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  //timer();
}

// possible function for the new question
function setNextQuestion() {}

// do something when we select the answer
function selectAnswer() {}

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
