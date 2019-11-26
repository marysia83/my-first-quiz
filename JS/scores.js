var username = document.getElementById("username");
var saveScoreButton = document.getElementById("saveScore");

    username.addEventListener("keyup", function() {
    console.log(username.value);
    saveScoreButton.disabled = !username.value; //if there is nothing entered, set the button to disabled
});

function saveHighScore(e) {
    e.preventDefault(); //prevents the page from refreshing
}