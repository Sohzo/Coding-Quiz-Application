var timer = document.querySelector(".time");
var startbutton = document.querySelector("#start");
var landingpage = document.querySelector(".landingpage");
var q1page = document.querySelector(".q1page");
var q2page = document.querySelector(".q2page");
var q3page = document.querySelector(".q3page");
var q4page = document.querySelector(".q4page");
var q5page = document.querySelector(".q5page");
var resultspage = document.querySelector(".resultspage");

var timeleft = 0;
var score = 0;

q1page.style.display = "none";
q2page.style.display = "none";
q3page.style.display = "none";
q4page.style.display = "none";
q5page.style.display = "none";
resultspage.style.display = "none";

function setTimer() {
    window.timeleft = 60;
    var timerInterval = setInterval(function() {
        timeleft--;
        timer.textContent = "Time: " + timeleft;

        if (timeleft ===0) {
            clearInterval(timerInterval);
        }
        
    },1000);
    
};

startbutton.addEventListener("click", function() {
    setTimer();
    landingpage.style.display = "none";
    q1page.style.display = "initial";
    question1();
});
// QUESTION 1
function question1() {
    var wrongans = document.querySelectorAll(".wrongans");
    var correctans = document.querySelectorAll(".correctans");
    wrongans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q1page.style.display = "none";
                timeleft = timeleft-10;
                question2()
            });
        });
    correctans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q1page.style.display = "none";
                score++;
                question2()
            });
        });
};

//QUESTION2
function question2() {
    var wrongans = document.querySelectorAll(".wrongans2");
    var correctans = document.querySelectorAll(".correctans2");
    q2page.style.display = "initial";
    wrongans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q2page.style.display = "none";
                timeleft = timeleft-10;
                question3()
            });
        });
    correctans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q2page.style.display = "none";
                score++;
                question3()
            });
        });
};

//QUESTION3
function question3() {
    var wrongans = document.querySelectorAll(".wrongans3");
    var correctans = document.querySelectorAll(".correctans3");
    q3page.style.display = "initial";
    wrongans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q3page.style.display = "none";
                timeleft = timeleft-10;
                question4()
            });
        });
    correctans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q3page.style.display = "none";
                score++;
                question4()
            });
        });
};

function question4() {
    var wrongans = document.querySelectorAll(".wrongans4");
    var correctans = document.querySelectorAll(".correctans4");
    q4page.style.display = "initial";
    wrongans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q4page.style.display = "none";
                timeleft = timeleft-10;
                question5()
            });
        });
    correctans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q4page.style.display = "none";
                score++;
                question5()
            });
        });
};

function question5() {
    var wrongans = document.querySelectorAll(".wrongans5");
    var correctans = document.querySelectorAll(".correctans5");
    q5page.style.display = "initial";
    wrongans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q5page.style.display = "none";
                resultspage.style.display = "initial";
                
            });
        });
    correctans.forEach(
        function(element) {
            element.addEventListener("click", function() {
                q5page.style.display = "none";
                score++;
                resultspage.style.display = "initial";
                
            });
        });
};