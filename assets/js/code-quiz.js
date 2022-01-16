// select timer and scores button

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
let questionList = document.createElement("ol");
// each options
let question1 = document.createElement("li");
let question2 = document.createElement("li");
let question3 = document.createElement("li");
let question4 = document.createElement("li");

// correct msg under the question
let correctMsg = document.createElement("p");
correctMsg.className = "correct-wrong";
correctMsg.setAttribute("id", "correctmsg");
correctMsg.textContent = "Correct";

//wrong msg under the question
let wrongMsg = document.createElement("p");
wrongMsg.className = "correct-wrong";
wrongMsg.setAttribute("id", "wrongmsg");
wrongMsg.textContent = "Incorrect";

// questions pool, array of objects with 3 properties each
const questionBank = [
  { question: "How to insert a comment that has more than one line?", answers: ["/*This comment has correct more than one line*/", "<!--This comment has more than one line-->", "//This comment has more than one line//", "--This comment has more than one line--"], correctAnswer: "answer1" },
  { question: "Inside which HTML element do we put the JavaScript?", answers: ["<script>", "<js>", "<scripting>", "<javascript>"], correctAnswer: "answer1" },
  { question: 'How do you write "Hello World" in an alert box?', answers: ['msgBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'alertBox("Hello World")'], correctAnswer: "answer3" },
  { question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?', answers: ["if (i <> 5)", "if (i != 5)", "if i =! 5 then", "if i <> 5"], correctAnswer: "answer2" },
  { question: "How does a FOR loop start?", answers: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"], correctAnswer: "answer2" },
  { question: "Which operator is used to assign a value to a variable?", answers: ["-", "x", "*", "="], correctAnswer: "answer4" },
  { question: "(function(){return typeof arguments; })();", answers: ["undefined", "arguments", "array", "object"], correctAnswer: "answer4" },
  { question: "What is the correct way to write a JavaScript array?", answers: ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]'], correctAnswer: "answer4" },
  { question: "How do you round the number 7.25, to the nearest integer?", answers: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)8"], correctAnswer: "answer1" },
  { question: "How do you find the number with the highest value of x and y?", answers: ["ceil(x, y)", "Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)"], correctAnswer: "answer2" },
];

// console.log questionBank array
// console.log(questionBank);
// console.log(questionBank[0]);
// console.log(questionBank[0].question);
// console.log(questionBank[0].answers[0]);

// new elements' classes and id's
welcome.className = "welcome";
codeQuizWelcome.setAttribute("id", "title");
codeQuizDescription.setAttribute("id", "description");

//start game button class and id
startBtn.setAttribute("id", "startbtn");
startBtn.className = "btn";
let startGameBtn = document.querySelector("#startbtn");

//
questionQuestion.className = "questquest";
questionQuestion.setAttribute("id", "thequestion");
questionEl.className = "question";
questionList.className = "qlist";
questionList.setAttribute("id", "questionlist");
// question1.setAttribute("id", "q1");
// question2.setAttribute("id", "q2");
// question3.setAttribute("id", "q3");
// question4.setAttribute("id", "q4");

// add text to welcome elements
codeQuizWelcome.textContent = "Coding Quiz Challenge";
codeQuizDescription.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds!";
startBtn.textContent = "Start Game";

// first question just for testing
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

// timer section
let timerEl = document.querySelector("#timer");
let time = 5;

// timer function
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

// start button function, start the countdown and shows first questions
startBtn.addEventListener("click", function () {
  //start timer
  timer();
});

// questions function
// let showQuestion =

//   // remove DOM elements after onclick
//   document.querySelector("#title").remove();
//   document.querySelector("#description").remove();
//   document.querySelector("#startbtn").remove();

//   //add wrap div to the body
//   body.appendChild(questionEl);

//   // add question h2 to the wrap div
//   questionEl.appendChild(questionQuestion);

//   //add ol to the wrap div
//   questionEl.appendChild(questionList);

//   // add li to the ol
//   questionList.appendChild(question1);
//   questionList.appendChild(question2);
//   questionList.appendChild(question3);
//   questionList.appendChild(question4);

//   // massage after selecting answer
//   body.appendChild(correctMsg);
// });

// let removeWelcome = (startBtn.onclick = function () {
// });

// show first set of questions
// startBtn.onclick = function () {
// };

// possible way to verify answers

// (function(){
//   function byId(id) {
//     return document.getElementById(id);
//   }
//   byId('submitter').onclick = function() {

//     var wrongAnswers = [ ];

//     if (!byId('answer-1-1').checked) { wrongAnswers.push(1); }
//     if (!byId('answer-2-2').checked) { wrongAnswers.push(2); }
//     if (!byId('answer-3-3').checked) { wrongAnswers.push(3); }
//     if (!byId('answer-4-2').checked) { wrongAnswers.push(4); }
//     if (!byId('answer-5-2').checked) { wrongAnswers.push(5); }
//     if (!byId('answer-6-4').checked) { wrongAnswers.push(6); }
//     if (!byId('answer-7-4').checked) { wrongAnswers.push(7); }
//     if (!byId('answer-8-5').checked) { wrongAnswers.push(8); }
//     if (!byId('answer-9-1').checked) { wrongAnswers.push(9); }
//     if (!byId('answer-10-2').checked) { wrongAnswers.push(10); }

//     var message;

//     if (wrongAnswers.length === 0) {
//       message = 'Flawless victory.';
//     }
//     else if (wrongAnswers.length <= 8) {
//       message = 'Very good, but not quite there yet.';
//     }
//     else if (wrongAnswers.length < 6) {
//       message = 'That\'s more than a half :(';
//     }
//     else {
//       message = 'Ouch.';
//     }

//     var prefix = (wrongAnswers.length === 10) ? 'all ' : '';

//     document.getElementById('quiz-result').innerHTML = (
//       'You\'ve got ' + prefix + '<strong>' + wrongAnswers.length +
//       '</strong> answer'+ (wrongAnswers.length === 1 ? '' : 's') +
//       ' wrong' + ((wrongAnswers.length > 0) ? (' (' + '#' + wrongAnswers.join(', #') + ')') : '')
//       + '.<br>' + message);
//   };
// })();
