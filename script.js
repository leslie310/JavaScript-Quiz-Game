var currentQuestionIndex = 0;
var timerId;
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#start-section");
var quizScreen = document.querySelector("#question-section");
var highScoreView = document.querySelector("#highscore-section");
var initialsEl = document.querySelector('#initials');
var questionsEl = document.querySelector("#question");
var holdInterval = 0;
var choicesEl = document.querySelector("#choices");


//questions array

var questions = [
   { title: "How  many innings are played in baseball?",
        a: 'C. 9',
    choices: ['A. 8', 'B. 5', 'C. 9', 'D. 12'],
},

   { title:"How  many games are played in a season?",
        a: 'B. 162',
    choices: ['A. 50',  'B. 162', 'C. 225', 'D. 90'],
   },

   { title:"What team won the 2020 World Series ?",
        a: 'A. Los Angeles Dodgers',
    choices: ['A. Los Angeles Dodgers', 'B. New York Yankees' , "C. Seattle Mariners", "D. Boston Red Sox"],
},
    
   { title:"Who wears number 38 in the Seattle Mariners?",
        a: 'A. Robby Ray',
    choices: ['A. Robbie Ray', 'B. Kyle Lewis', 'C. Carlos Santana ', 'D. Eugenio Suarez']
   }
];


//currentQuestions =0
var arrayShuffledQuestions
var QuestionIndex = 0;

//startg game7
function startQuiz() {
    titleScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "show");
    
    timerId = setInterval(tick,1000);
    
    timeEl.textContent = time;
    
    getQuestion();
}

function tick() {
    time--;
    timeEl.textContent = time;
    if(time <= 0) {
        quizEnd();
    }
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML ="";
}
 //start timer// start time at 25
   




var checkAnswer = function(event) {
var selectedAnswer = event.target
     if (arrayShuffledQuestions[QuestionIndex].a === selectedAnswer.innerText) {
         answerisCorrect()
         score = score + 5
         }
        else {
        answerisIncorrect ()
        score = score - 2;
        timeleft = timeleft - 2;
                
     };
 }

    //loadQuestion()

var setQuestion = function() {
    resetAnswers ()
     displayQuestion(arrayShuffledQuestion[QuestionIndex])
}
    

    //prompt for user initials
var createHighscore = function(event) {
    event.preventDefault()
    var initials = document.querySelector('#initials').value;
    if (!initials) {
        alert('Please enter your initials');
        return;
    }

     formInitials.reset();

     var Highscore = {
        initials: initials,
         score: score
    }
}

// function for saving high score
function saveHighscores() {
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var highscores = 
        JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: time,
            initials: initials
        };
    }
    
}
 // save to ls
 window.localStorage.setItem("highscores", JSON.stringify("highscores"));
    
startBtn.onclick = startQuiz;
