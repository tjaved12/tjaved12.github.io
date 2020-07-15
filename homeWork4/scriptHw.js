 
 var btnStart = document.querySelector("#start");
 var btnSubmit = document.querySelector("#submit")
 var btnSubmit1 = document.querySelector("#submit1")
 var btnSubmit2 = document.querySelector("#submit2")
 var btngoBack = document.querySelector("#goBack")
 var questionList = document.querySelector("#question-list");
 var answerList = document.querySelector("#answer-list");
 var question= document.querySelector("#questions");

 let score = 0;

function startQuiz(event){
   
    event.preventDefault();
    document.querySelector("#introduction").style.display = "none"; 
    console.log(close);
    document.querySelector("#question1").style.display = "block";
    console.log(open);
   
    if(document.getElementsByName("correct").checked) {
        score+= score++    
              }
           console.log(score)
}
function scoreQuiz(score){

    document.querySelector("#question1").style.display = "none";
    document.querySelector("#question2").style.display = "block";
    if(document.getElementById("correct").checked) {
        score+= score++        
              }
              console.log(score)

}



function scoreQuizFinal(score){
    document.querySelector("#question2").style.display = "none";
    document.querySelector("#question3").style.display = "block";
    if(document.getElementsByName("correct").checked) {
        score+= score++           
              }
           console.log(score);
            }

function addScore(){


    if(document.getElementById("correct").checked) {
        score++        
              }
           console.log(score)
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
 btnStart.addEventListener("click",startQuiz);
 btnSubmit.addEventListener("click",scoreQuiz);
 btnSubmit1.addEventListener("click",scoreQuizFinal);
 btnSubmit2.addEventListener("click",addScore);


