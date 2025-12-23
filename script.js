document.addEventListener("DOMContentLoaded", () => {
    // Starting time: 81 days, 22 hours, 7 minutes, 0 seconds
    let days = 81;
    let hours = 22;
    let minutes = 7;
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
