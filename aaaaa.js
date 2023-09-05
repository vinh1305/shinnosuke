const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let totalSeconds = 600; // 10 minutes

function updateTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (totalSeconds === 0) {
        clearInterval(timerInterval);
        alert('Countdown timer has expired!');
    } else {
        totalSeconds--;
    }
}

const timerInterval = setInterval(updateTimer, 1000);
