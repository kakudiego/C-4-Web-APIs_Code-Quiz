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
  { question: "How to insert a comment that has more than one line?", answers: ["/*This comment has correct more than one line*/", "!--This comment has more than one line--!", "//This comment has more than one line//", "--This comment has more than one line--"], correctAnswer: "1" },
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
let startGameBtn = document.querySelector("#startbtn");
startBtn.setAttribute("id", "startbtn");
startBtn.className = "btn";
startBtn.textContent = "Start Game";

// submit button class and id
let submitBtn = document.querySelector("#submitbtn");
// submitBtn.setAttribute("id", "submitbtn");
// submitBtn.className = "btn";
// submitBtn.textContent = "Submit";

// question div and ol, class and id
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

// first question just for testing
// questionQuestion.textContent = "question 1";
// question1.textContent = "a";
// question2.textContent = "b";
// question3.textContent = "c";
// question4.textContent = "d";

// display first screen elements
body.appendChild(welcome);
welcome.appendChild(codeQuizWelcome);
welcome.appendChild(codeQuizDescription);
welcome.appendChild(startBtn);

// timer section
let timerEl = document.querySelector("#timer");
let time = 5;

// timer function
// function timer() {
//   let timeInterval = setInterval(function () {
//     timerEl.textContent = "Timer: " + time;
//     time--;

//     if (time < -1) {
//       alert("Times Up!");
//       clearInterval(timeInterval);
//       timerEl.textContent = "Timer: 60";
//     }
//   }, 1000);
// }

//remove DOM elements after onclick
function removeWelcome() {
  document.querySelector("#title").remove();
  document.querySelector("#description").remove();
  document.querySelector("#startbtn").remove();
}

function removeOldQuesiton() {
  let clearChoices = document.querySelectorAll(".choices").remove();
  questionEl.remove(clearChoices);
  // document.querySelector("").remove();
  // document.querySelector("").remove();
}

//add wrap div to the body
body.appendChild(questionEl);

//accumulator variable to count loops through questions
let questionsNumber = 0;

// questions function
function showQuestion() {
  console.log("new question!");
  // template literal
  questionEl.innerHTML += `<h1> ${questionBank[questionsNumber].question} </h1> 
  <button class="choice" data-choice="1"> ${questionBank[questionsNumber].answers[0]} </button> 
  <button class="choice" data-choice="2"> ${questionBank[questionsNumber].answers[1]} </button> 
  <button class="choice" data-choice="3"> ${questionBank[questionsNumber].answers[2]} </button> 
  <button class="choice" data-choice="4"> ${questionBank[questionsNumber].answers[3]} </button>`;

  // select all answer buttons
  const choices = document.querySelectorAll(".choice");
  // add event listener to all answer choice buttons
  for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function () {
      console.log(this.getAttribute("data-choice"));
      console.log(questionBank[0].correctAnswer);
      console.log(this.getAttribute("data-choice") == questionBank[0].correctAnswer);

      // we are now evaluating if the answer choice is correct or not. If answer is correct, add points to score.
      // next, use if/else if block to do this

      // remove HTML of current question
      //THIS IS NOT WORKING YET !!!!!!
      removeOldQuesiton();
      // run function again to make new question
      //showQuestion();
    });

    //add 1 to current question number
    questionsNumber = questionsNumber + 1;
  }
}

// start button function when click start button 
let startGame = startBtn.addEventListener("click", function () {
  //start timer
  //timer();
  removeWelcome();

  // we need to loop through questions
  for (let i; questionBank.length; i++) {
    showQuestion();
  }
});

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
//   byId('submitbtn').onclick = function() {

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
