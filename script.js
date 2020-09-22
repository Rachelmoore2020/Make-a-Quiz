const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const counter = document.getElementById('counter');
const quizTime = 15;
let count = 0;

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "hyper text Markeup Language",
        choiceB : "Hyperlinks and Text Markup Languages",
        choiceC : "Home Tool Markup Language",
        correct : "A"
    }
    {
        question : "What does CSS stand for?",
        choiceA : "Completely Self Sufficient",
        choiceB : "Computer Style Sheet",
        choiceC : "Cascading Style Sheet",
        correct : "C"
    }
    {
        question : "What is the purpose of a Bootcamp?",
        choiceA : "To teach you perseverance",
        choiceB : "To teach you to find your own solutions",
        choiceC : "Both A and B",
        correct : "C"
    }
    {
        question : "What is the correct way to link a javascript file?",
        choiceA : "Use the <script> tags",
        choiceB : "Make sure it appears within the body section",
        choiceC : "There is no need for a link, html finds it on its own",
        correct : "A"

    }


]
let TIMER;
start.addEventListener("click", startQuiz);

function starQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();

}

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" +q.question + "</p";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

function checkAnswer(answer) {
    if(question[runningQuestionIndex].correct == answer){
        score++;

    }else{
        answerIsWrong();

    }
}