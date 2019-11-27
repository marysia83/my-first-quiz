//calculating user's score and saving 3 highest scores

var username = document.getElementById("username");
var saveScoreButton = document.getElementById("saveScore");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

//to save the scores in local storage:
var highScores = JSON.parse(localStorage.getItem("highScores")) || []; //console.log will show an array. without "|| []" it will log null

var MAX_HIGH_SCORES = 3;


    username.addEventListener("keyup", function() {
    saveScoreButton.disabled = !username.value; //if there is nothing entered, set the button to disabled
});

function saveHighScore(e) {
    e.preventDefault(); //prevents the page from refreshing

    var score = {
        score: mostRecentScore,
        name: username.value,
    };

    //add the scores:
    highScores.push(score);

    //to only show the 3 top scores:
    highScores.sort(function (a,b) {
        return b.score - a.score; //to sort highest to lowest; if b is higher than a, the put b before a score
    })

    highScores.splice(3); //cut off everything after 10th score

    localStorage.setItem("highScores", JSON.stringify(highScores));
}

//showing highest scores
