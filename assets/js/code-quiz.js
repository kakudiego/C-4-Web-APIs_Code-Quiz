// select timer and scores button
let timerEl = document.querySelector("timer");
let leaderboardBtn = document.querySelector("leaderboard");

// welcome quiz
let body = document.body;
let welcome = document.createElement("div");
let codeQuizWelcome = document.createElement("h1");
let codeQuizDescription = document.createElement("p");

// new elements' classes
welcome.className = "welcome";
codeQuizWelcome.setAttribute("id", "title");
codeQuizDescription.setAttribute("id", "description");

// questions
let questionEl = document.createElement("div");
let questionList = document.createElement("ol");
let question1 = document.createElement("li");
let question2 = document.createElement("li");
let question3 = document.createElement("li");
let question4 = document.createElement("li");

// add text to new elements
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";

body.appendChild(welcome);
welcome.appendChild(codeQuizWelcome);
welcome.appendChild(codeQuizDescription);
