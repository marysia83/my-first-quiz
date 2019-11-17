//get a reference to the question:
var question = document.getElementById("question");

//get a reference to the choices:
var choices = document.getElementsByClassName("choice-text");

//current question variable will be an object (in {})
var currentQuestion = {};

//var for accepting answers
var acceptingAnswers = true;

var score = 0;

//what question are you on:
var questionsCounter = 0;

//empty array for questions to give to the user (take the question out once it's used)
var availableQuestions = [];

var questions = [
    {
        question: "What is Marysia's eve color?",
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
    getNewQuestion();
}; //end of startQuiz

function getNewQuestion() {
    questionsCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length); //this is for the app to get a question from the available questions
    currentQuestion = availableQuestions[questionIndex]; //chooses which question
    question.innerText = currentQuestion.question; 
    //assigns currentQuestion to the #question in html doc

    choices.forEach(myFunction);

    function myFunction(choice) {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    }; 

}; //end of getNewQuestion





