var username = document.getElementById("username");
var saveScoreButton = document.getElementById("saveScore");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

//to save the scores in local storage:
var highScores = JSON.parse(localStorage.getItem("highScores")) || []; //console.log will show an array. without "|| []" it will log null
console.log(highScores);



    username.addEventListener("keyup", function() {
    console.log(username.value);
    saveScoreButton.disabled = !username.value; //if there is nothing entered, set the button to disabled
});

function saveHighScore(e) {
    e.preventDefault(); //prevents the page from refreshing

    var score = {
        score: mostRecentScore,
        name: username.value,
    }

}