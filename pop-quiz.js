var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var startQuiz = document.getElementById("start")

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;






var timerInterval;

function timer() {
  if (secondsLeft > 9) {
    secondsLeft--;
    countdownPrintVariable.textContent = "0:" + secondsLeft;
  } else if (secondsLeft > 0) {
    secondsLeft--;
    countdownPrintVariable.textContent = "0:0" + secondsLeft;
  } else {
    // you lose the game
    clearInterval(timerInterval);
    messagePrintVariable.textContent = "you lose!";
  }
}



function goToNextQuestion(whatTheUserClicked) {
    var correctText = questions[currentQuestionIndex].answer;

    if (whatTheUserClicked == correctText) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log("Wrong!");
    }
    currentQuestionIndex++;
    getNewQuestion(currentQuestionIndex);
}

function answerClickSetup() {
    var a = document.getElementById("answer1");
    //console.log(a);
    var b = document.getElementById("answer2");
    var c = document.getElementById("answer3");
    var d = document.getElementById("answer4");

a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
}

answerClickSetup();

startQuiz.addEventListener("click", function () {

    timerInterval = setInterval(timer, 1000);
    getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
    var question = questions[questionIndex];
    //console.log(question);
    currentQuestion = question;
    var title = question.title;
    //console.log(title);
    var questionEl = document.getElementById("question");
    questionEl.innerText = title;

    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    //console.log(answerEl1);
    answerEl1.innerText = choice1;
    
    var choice2 = question.choices[3];
    var answerEl2 = document.getElementById("answer2");
    //console.log(answerEl2);
    answerEl2.innerText = choice2;
    //console.log(choice2);

    var choice3 = question.choices[2];
    var answerEl3 = document.getElementById("answer3");
    //console.log(answerEl3);
    answerEl3.innerText = choice3;
    //console.log(choice3);

    var choice4 = question.choices[0];
    var answerEl4 = document.getElementById("answer4");
    //console.log(answerEl4);
    answerEl4.innerText = choice4;
    //console.log(choice4);

    document.getElementById("question").innerText = title;
    document.getElementById("answer1").innerText = choice1;
    document.getElementById("answer2").innerText = choice2;
    document.getElementById("answer3").innerText = choice3;
    document.getElementById("answer4").innerText = choice4;

}
//submitAnswer.addEventListener("click", quizTime);
function scoreKeeper(){
    document.getElementById("score").innerHTML = score++;
  
  scoreKeeper();
}
