var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScore");

    username.addEventListener("keyup", function() {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value; //if there is nothing entered, set the button to disabled
});

function saveHighScore(e) {
    e.preventDefault(); //prevents the page from refreshing
}