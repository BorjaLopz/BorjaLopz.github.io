const stopwatch = document.getElementById("stopwatch");
const time = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer(){
    //alert("button start was clicked!");
    //Comprobamos que el boton haya sido pulsado
    interval= setInterval(() => {
        seconds++;
        if (seconds===60)
        {
            minutes++;
            seconds = 0;
        }
        if(minutes===60)
        {
            hours++;
            minutes = 0;
        }
        time.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
}



function stopTimer(){
    //alert("button stop was clicked!");
    //Comprobamos que el boton haya sido pulsado
    clearInterval(interval);
}

function resetTimer(){
    //alert("button reset was clicked!");
    //Comprobamos que el boton haya sido pulsado
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.textContent="00:00:00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
