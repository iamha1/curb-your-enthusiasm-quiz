var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timerVar = document.getElementById("timerHTML");
var startQuiz = document.getElementById("start")

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;


// Timer Function
var secondsLeft;

function timer() {
    if (secondsLeft > 9) {
        secondsLeft--;
        timerVar.textContent = "Timer: 0:" + secondsLeft;
    } else if (secondsLeft > 0) {
        secondsLeft--;
        timerVar.textContent = "Timer: 0:0" + secondsLeft;
    } else {
        // you lose the game
        clearInterval(timerInterval);
        timerVar.textContent = "You lose!";
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

    scoreKeeper();

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        getNewQuestion(currentQuestionIndex);
    }
    else{
        document.getElementById("question").style = "display: none";
        document.getElementById("answer1").style = "display: none";
        document.getElementById("answer2").style = "display: none";
        document.getElementById("answer3").style = "display: none";
        document.getElementById("answer4").style = "display: none";

        clearInterval(timerInterval);

        var gameOver = document.createElement("button");
        gameOver.textContent = "Game Over! Play Again?";
        gameOver.className = "btn btn-primary";

        gameOver.addEventListener("click", function () {location.reload()});

        questionQuiz.append(gameOver);
    }
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
    console.log(question)
    //console.log(question);
    currentQuestion = question;
    var title = currentQuestion.title;
    //console.log(title);
    var questionEl = document.getElementById("question");
    questionEl.innerText = title;

    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    //console.log(answerEl1);
    answerEl1.innerText = choice1;

    var choice2 = question.choices[1];
    var answerEl2 = document.getElementById("answer2");
    //console.log(answerEl2);
    answerEl2.innerText = choice2;
    //console.log(choice2);

    var choice3 = question.choices[2];
    var answerEl3 = document.getElementById("answer3");
    //console.log(answerEl3);
    answerEl3.innerText = choice3;
    //console.log(choice3);

    var choice4 = question.choices[3];
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
function scoreKeeper() {
    document.getElementById("score").innerHTML = score;
}