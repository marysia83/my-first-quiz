var username = document.getElementById("username");
var saveScoreButton = document.getElementById("saveScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highestScore = document.getElementById("highestScores");
highestScore.innerText = mostRecentScore;

    username.addEventListener("keyup", function() {
    console.log(username.value);
    saveScoreButton.disabled = !username.value; //if there is nothing entered, set the button to disabled
});

function saveHighScore(e) {
    e.preventDefault(); //prevents the page from refreshing
}