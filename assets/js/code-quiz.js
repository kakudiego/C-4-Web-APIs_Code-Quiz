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
let questionEl = document.createElement("div"); // wrap the question
let questionQuestion = document.createElement("h2"); // the question
let questionList = document.createElement("ul"); // unordered list for the options
// let question1 = document.createElement("li"); // each options
// let questionOptions1 = document.createElement("li");
// let question2 = document.createElement("li");
// let question3 = document.createElement("li");
// let question4 = document.createElement("li");

const questionBank = [
  {
    question1: "How to insert a comment that has more than one line?",
    option1: "/*This comment has correct more than one line*/", //correct
    option2: "<!--This comment has more than one line-->",
    option3: "//This comment has more than one line//",
    option4: "--This comment has more than one line--",
  },
  {
    question2: "Inside which HTML element do we put the JavaScript?",
    option1: "<script>", // correct
    option2: "<js>",
    option3: "<scripting>",
    option4: "<javascript>",
  },
  {
    question3: 'How do you write "Hello World" in an alert box?',
    option1: 'alert("Hello World")', //correct
    option2: 'msgBox("Hello World")',
    option3: 'msg("Hello World")',
    option4: 'alertBox("Hello World")',
  },
  {
    question4: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    option1: "if (i <> 5)",
    option2: "if (i != 5)", // correct
    option3: "if i =! 5 then",
    option4: "if i <> 5",
  },
  {
    question5: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  {
    question6: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  {
    question7: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  {
    question8: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  {
    question9: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
  {
    question10: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }
];

// new elements' classes and id's
welcome.className = "welcome";
codeQuizWelcome.setAttribute("id", "title");
codeQuizDescription.setAttribute("id", "description");
startBtn.setAttribute("id", "startBtn");
startBtn.className = "btn";
questionEl.className = "question";
questionList.className = "qList";
questionList.setAttribute = ("id", "questionList");
// question1.setAttribute("id", "q1");
// questionOptions1.setAttribute("id", "q1");
// question2.setAttribute("id", "q2");
// question3.setAttribute("id", "q3");
// question4.setAttribute("id", "q4");

// add text to new elements
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";
startBtn.textContent = "Start Game";

// display as HTML elements
body.appendChild(welcome);
welcome.appendChild(codeQuizWelcome);
welcome.appendChild(codeQuizDescription);
welcome.appendChild(startBtn);

questionQuestion.textContent = "How to insert a comment that has more than one line?";

//questionOptions1 = ["/*This comment has correct more than one line*/", "<!--This comment has more than one line-->", "//This comment has more than one line//", "--This comment has more than one line--"];

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
  document.querySelector("#startBtn").remove();

  //question1.textContent = question1Options;

  body.appendChild(questionEl);
  questionEl.appendChild(questionQuestion);
  questionEl.appendChild();
});

// let removeWelcome = (startBtn.onclick = function () {
// });

// show first set of questions
// startBtn.onclick = function () {
// };

// questions

// How does a FOR loop start?
// for (i = 0; i <= 5; i++)     correct
// for i = 1 to 5
// for (i <= 5; i++)
// for (i = 0; i <= 5)

// What is the correct way to write a JavaScript array?
// var colors = ["red", "green", "blue"]     correct
// var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")
// var colors = (1:"red", 2:"green", 3:"blue")
// var colors = "red", "green", "blue"

// How do you round the number 7.25, to the nearest integer?
// Math.round(7.25)     correct
// round(7.25)
// Math.rnd(7.25)
// rnd(7.25)8

// How do you find the number with the highest value of x and y?
// Math.max(x, y)     correct
// ceil(x, y)
// Math.ceil(x, y)
// top(x, y)

// Which operator is used to assign a value to a variable?
// =     correct
// x
// -
// *

// (function(){
//     return typeof arguments;
//   })();
// "object"   correct
// "array"
// "arguments"
// "undefined"

// let f = function g(){ return 23; };
//   typeof g();
// "number"
// "undefined"
// "function"
// Error    correct

// possible way to verify answers
// (function(){
//   function byId(id) {
//     return document.getElementById(id);
//   }
//   byId('submitter').onclick = function() {

//     var wrongAnswers = [ ];

//     if (!byId('answer-1-1').checked) { wrongAnswers.push(1); }
//     if (!byId('answer-2-4').checked) { wrongAnswers.push(2); }
//     if (!byId('answer-3-1').checked) { wrongAnswers.push(3); }
//     if (!byId('answer-4-4').checked) { wrongAnswers.push(4); }
//     if (!byId('answer-5-1').checked) { wrongAnswers.push(5); }
//     if (!byId('answer-6-1').checked) { wrongAnswers.push(6); }
//     if (!byId('answer-7-1').checked) { wrongAnswers.push(7); }
//     if (!byId('answer-8-2').checked) { wrongAnswers.push(8); }
//     if (!byId('answer-9-3').checked) { wrongAnswers.push(9); }
//     if (!byId('answer-10-2').checked) { wrongAnswers.push(10); }
//     if (!byId('answer-11-1').checked) { wrongAnswers.push(11); }
//     if (!byId('answer-12-2').checked) { wrongAnswers.push(12); }
//     if (!byId('answer-13-1').checked) { wrongAnswers.push(13); }
//     if (!byId('answer-14-2').checked) { wrongAnswers.push(14); }

//     var message;

//     if (wrongAnswers.length === 0) {
//       message = 'Flawless victory.';
//     }
//     else if (wrongAnswers.length <= 7) {
//       message = 'Very good, but not quite there yet.';
//     }
//     else if (wrongAnswers.length < 14) {
//       message = 'That\'s more than a half :(';
//     }
//     else {
//       message = 'Ouch.';
//     }

//     var prefix = (wrongAnswers.length === 14) ? 'all ' : '';

//     document.getElementById('quiz-result').innerHTML = (
//       'You\'ve got ' + prefix + '<strong>' + wrongAnswers.length +
//       '</strong> answer'+ (wrongAnswers.length === 1 ? '' : 's') +
//       ' wrong' + ((wrongAnswers.length > 0) ? (' (' + '#' + wrongAnswers.join(', #') + ')') : '')
//       + '.<br>' + message);
//   };
// })();
