document.addEventListener('DOMContentLoaded', () => {
    // Initial time values (21 days, 7 hours, 0 minutes, 0 seconds)
    let days = 21;
    let hours = 7;
    let minutes = 0;
    let seconds = 0;

    const updateDisplay = () => {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    };

    const countUp = () => {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        if (hours >= 24) {
            hours = 0;
            days++;
        }

        updateDisplay();
    };

    // Update the display immediately
    updateDisplay();

    // Start counting up every second
    setInterval(countUp, 1000);
});