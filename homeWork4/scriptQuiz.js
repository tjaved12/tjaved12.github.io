// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
       
        question : "Select the appropriate HTML tag used for thr largets heading?",
        imgSrc : "img/q1.png",
        choiceA : "h1",
        choiceB : "h6",
        choiceC : "Header",
        choiceD : "h3",

    
        correct : "A"
    },{
        question : "in CSS, choose the correct option to select this image by its ID",
        imgSrc : "img/q2.png",
        choiceA : "img{}",
        choiceB : "#mainpic{}",
        choiceC : "mainpic{}",
        choiceD : "None of Them",
        correct : "A"
    },{
        question : "Which one of these is a JavaScript package manager?",
        imgSrc : "img/q3.png",
        choiceA : "Type Script",
        choiceB : "Node.JS",
        choiceC : "npm",
        choiceD : "jQuery",
        correct : "C"
    },{
      question : "What is the HTML tag under which one can write the JavaScript code?",
      imgSrc : "img/q4.png",
     choiceA : "scripted",
     choiceB : "script",
     choiceC : "js",
     choiceD : "None",
     correct : "B"
},{
    question : " What is the correct syntax for referring to an external script called “sc.js”?",
    imgSrc : "img/q5.png",
    choiceA : "script src=sc.js",
    choiceB : "script href=sc.js",
    choiceC : "script ref=sc.js",
    choiceD : "script url=sc.js",
    correct : "A"
},
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const quizTime = 20; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / quizTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function time(){
        TIMER = setInterval(renderCounter,1000); // 1000ms = 1s

}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}




// counter render

function renderCounter(){
    if(count <= quizTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
    
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer if right or wrong

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
  
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score

        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

















