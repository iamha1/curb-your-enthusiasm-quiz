var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var startQuiz = document.getElementById("start")

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

function goToNextQuestion(whatTheUserClicked) {
    var correctText = questions[currentQuestionIndex].answer;

    if (whatTheUserClicked === correctText) {
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
    console.log(a);

a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
}

answerClickSetup();

startQuiz.addEventListener("click", function () {
    getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
    var question = questions[questionIndex];
    console.log(question);
    currentQuestion = question;
    var title = question.title;
    //console.log(title);
    var questionEl = document.getElementById("question");
    questionEl.innerText = title;

    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    console.log(answerEl1);
    answerEl1.innerText = choice1;
    
    var choice2 = question.choices[1];
    var answerEl2 = document.getElementById("answer2");
    console.log(answerEl2);
    answerEl1.innerText = choice2;
}

