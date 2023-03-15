var timer = document.querySelector(".time");
var startbutton = document.querySelector("#start");
var landingpage = document.querySelector(".landingpage");
var q1page = document.querySelector(".q1page");

var timeleft = 0;

function setTimer() {
    window.timeleft = 80;
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
});


