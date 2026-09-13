let timerDisplay = document.getElementById("timer");

let running = false;
let timer;
let timeElapsed = 0;

function startTimer() {
    running = true;
    timer = setInterval(updateTimer, 10);
}

function endTimer() {
    running = false;
    clearInterval(timer);
}

function updateTimer() {
    ++timeElapsed;

    // TODO: verify this works mathematically
    let milliseconds = Math.floor(timeElapsed % 100);
    let seconds = Math.floor(timeElapsed / 100 % 60);
    let minutes = Math.floor(timeElapsed / 6000);

    milliseconds = String(milliseconds).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}