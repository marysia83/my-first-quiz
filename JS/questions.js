//get a reference to the question:
var question = document.getElementById("question");

//get a reference to the choices:
var choices = document.getElementsByClassName("choice-text");

//current question variable will be an object (in {})
var currentQuestion = {};

//var for accepting answers; set to false, so they don't answer until it's loaded
var acceptingAnswers = false;

var score = 0;

//what question are you on:
var questionsCounter = 0;

//empty array for questions to give to the user (take the question out once it's used)
var availableQuestions = [];

var questions = [
    {
        question: "What is Marysia's eyes color?",
        choice1: "Green",
        choice2: "Blue",
        choice3: "Purple",
        choice4: "Brown",
        answer: 1
    },
    {
        question: "What school does Marysia work for?",
        choice1: "Evanston High School",
        choice2: "Harvard",
        choice3: "School of Communication at NU",
        choice4: "Marysia is unemployed",
        answer: 3
    },
    {
        question: "Marysia would like to live in the following state:",
        choice1: "Florida",
        choice2: "Texas",
        choice3: "Indiana",
        choice4: "Colorado",
        answer: 4
    },
    {
        question: "Where is Marysia coming from?",
        choice1: "She was born in US.",
        choice2: "From beautiful Poland.",
        choice3: "Australia",
        choice4: "France",
        answer: 2
    }
];

var correctPoints = 10;
var maxQuestions = 4;

function startQuiz() {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    console.log(availableQuestions); //test
    getNewQuestion();
}; //end of startQuiz


function getNewQuestion() {

    //we need this so that when the user completes all the questions, they will be directed to the finish/score page
    if (availableQuestions.length === 0 || questionsCounter >= maxQuestions) {
        return window.location.assign("/finish.html")
    }

    questionsCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length); //this is for the app to get a question from the available questions
    currentQuestion = availableQuestions[questionIndex]; //chooses which question
    question.innerText = currentQuestion.question; 
    //assigns currentQuestion to the #question in html doc

   //below: for each CurrentQuestion we want the applicable choice to be shown:

//forEach: currentValue: value of current element (required)
//forEach: index: array index of the current element (optional)
//forEach: arr: array object the current element belongs to (optional)
//forEach: thisValue: value  to be passed to the function as its "this" value (optional)
//Array.from(blaBla): makes an array from HTML

    Array.from(choices).forEach(function (choice) { //choice is the current value
        number = choice.dataset["number"], //gets access to the data number attributes - this is the number for each choice
        choice.innerText = currentQuestion["choice" + number] //from the current question we want that choice number
        //so for each currentQuestion we grab the dataset number for the choices and replace the text with 
        //the question's choices. Reminder: .choice-text in html = var choices
    });
    
//we need to "remove" the questions that were used, so the user does not get the question already used
//questionIndex = where do we want to splice
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

}; //end of getNewQuestion


//below is to add event for the user to click. Once they click, we collect their answer
Array.from(choices).forEach(function (choice) {
    choice.addEventListener("click", function(e) { //which choice they clicked
        console.log(e.target); //this will log what choice the user clicked
        if (!acceptingAnswers) return; //if we are not ready to accept user's answer, we will return (ignore the fact they clicked)

        acceptingAnswers = false; //we want to have a bit of delay
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        // console.log(selectedAnswer == currentQuestion.answer); //to check if the selected answer was correct (true) or incorrect (false)

        var classToApply = "incorrect"; //set the default to incorrec, then check if it is correct, and then update it to correct
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = "correct"
                console.log(classToApply);
            }
        
            //we want to apply this correct/incorrect class to the html (to the whole clicked button/container element) 
        selectedChoice.parentElement.classList.add(classToApply); //add the color red/green to incorrect/correct
        //we need some delay, otherwise the changed colors will not show
        function setTimeout() {
        selectedChoice.parentElement.classList.remove(classToApply); //we need this to remove the color, otherwise the collor will keep showing
        }, 1000

        
            

        getNewQuestion(); //after they selected their answer, we give new question
    });

}); //end of choices.forEach

startQuiz();





