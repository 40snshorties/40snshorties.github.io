document.addEventListener("DOMContentLoaded", () => {
    let days = 21;
    let hours = 7;
    let minutes = 0;
    let seconds = 0;

    function updateDisplay() {
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    function countUp() {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        if (hours === 24) {
            hours = 0;
            days++;
        }

        updateDisplay();
    }

    updateDisplay();
    setInterval(countUp, 1000);
});
