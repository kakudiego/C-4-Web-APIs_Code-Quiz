// select timer and scores button
let timerEl = document.querySelector("#timer");
let leaderboardBtn = document.querySelector("#leaderboard");

// welcome quiz
let body = document.body;
let welcome = document.createElement("div");
let codeQuizWelcome = document.createElement("h1");
let codeQuizDescription = document.createElement("p");
let startBtn = document.createElement("BUTTON");

// questions
// div wrap the question
let questionEl = document.createElement("div");
// the question
let questionQuestion = document.createElement("h2");
// unordered list for the options
let questionList = document.createElement("ul");
// each options
let question1 = document.createElement("li");
let question2 = document.createElement("li");
let question3 = document.createElement("li");
let question4 = document.createElement("li");

const questionBank = [
  {
    question0: "How to insert a comment that has more than one line?",
    option1: "/*This comment has correct more than one line*/", //correct
    option2: "<!--This comment has more than one line-->",
    option3: "//This comment has more than one line//",
    option4: "--This comment has more than one line--",
  },
  {
    question1: "Inside which HTML element do we put the JavaScript?",
    option1: "<script>", // correct
    option2: "<js>",
    option3: "<scripting>",
    option4: "<javascript>",
  },
  {
    question2: 'How do you write "Hello World" in an alert box?',
    option2: 'msgBox("Hello World")',
    option3: 'msg("Hello World")',
    option1: 'alert("Hello World")', //correct
    option4: 'alertBox("Hello World")',
  },
  {
    question3: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    option1: "if (i <> 5)",
    option2: "if (i != 5)", // correct
    option3: "if i =! 5 then",
    option4: "if i <> 5",
  },
  {
    question4: "How does a FOR loop start?",
    option1: "for i = 1 to 5",
    option2: "for (i = 0; i <= 5; i++)", //correct
    option3: "for (i <= 5; i++)",
    option4: "for (i = 0; i <= 5)",
  },
  {
    question5: "Which operator is used to assign a value to a variable?",
    option1: "-",
    option2: "x",
    option3: "*",
    option4: "=", // correct
  },
  {
    question6: "(function(){return typeof arguments; })();",
    option1: "undefined",
    option2: "arguments",
    option3: "array",
    option4: "object", // correct
  },
  {
    question7: "What is the correct way to write a JavaScript array?",
    option1: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    option2: 'var colors = (1:"red", 2:"green", 3:"blue")',
    option3: 'var colors = "red", "green", "blue"',
    option4: 'var colors = ["red", "green", "blue"]', // correct
  },
  {
    question8: "How do you round the number 7.25, to the nearest integer?",
    option1: "Math.round(7.25)", // correct
    option2: "round(7.25)",
    option3: "Math.rnd(7.25)",
    option4: "rnd(7.25)8",
  },
  {
    question9: "How do you find the number with the highest value of x and y?",
    option1: "ceil(x, y)",
    option2: "Math.max(x, y)", //correct
    option3: "Math.ceil(x, y)",
    option4: "top(x, y)",
  },
];

// how to call questionBank array
console.log(questionBank[9]);
console.log(questionBank[9].question9);
console.log(questionBank[9].option1);
console.log(questionBank[9].option2);
console.log(questionBank[9].option3);
console.log(questionBank[9].option4);

let question9 = function () {};
console.log(question9);

// new elements' classes and id's
welcome.className = "welcome";
codeQuizWelcome.setAttribute("id", "title");
codeQuizDescription.setAttribute("id", "description");
startBtn.setAttribute("id", "startbtn");
startBtn.className = "btn";
questionQuestion.className = "questquest";
questionQuestion.setAttribute("id", "thequestion");
questionEl.className = "question";
questionList.className = "qlist";
questionList.setAttribute("id", "questionlist");
question1.setAttribute("id", "q1");
question2.setAttribute("id", "q2");
question3.setAttribute("id", "q3");
question4.setAttribute("id", "q4");

// add text to welcome elements
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";
startBtn.textContent = "Start Game";

// first question test
questionQuestion.textContent = "question 1";
question1.textContent = "a";
question2.textContent = "b";
question3.textContent = "c";
question4.textContent = "d";

// display as HTML elements
body.appendChild(welcome);
welcome.appendChild(codeQuizWelcome);
welcome.appendChild(codeQuizDescription);
welcome.appendChild(startBtn);

// setup the score timer onclick
let startGameBtn = (startBtn.onclick = function () {
  let timeLeft = 5;

  let timeInterval = setInterval(function () {
    console.log(timeLeft);
    timerEl.textContent = "Timer: " + timeLeft;
    timeLeft--;

    if (timeLeft < -1) {
      timerEl.textContent = "Timer: 90";
      alert("Times Up!");
      clearInterval(timeInterval);
    }
  }, 1000);
  // remove DOM elements after onclick
  document.querySelector("#title").remove();
  document.querySelector("#description").remove();
  document.querySelector("#startbtn").remove();

  //add wrap div to the body
  body.appendChild(questionEl);
  // add question h2 to the wrap div
  questionEl.appendChild(questionQuestion);
  //add ul to the wrap div
  questionEl.appendChild(questionList);
  // add li to the ul
  questionList.appendChild(question1);
  questionList.appendChild(question2);
  questionList.appendChild(question3);
  questionList.appendChild(question4);
});

// let removeWelcome = (startBtn.onclick = function () {
// });

// show first set of questions
// startBtn.onclick = function () {
// };

// possible way to verify answers
