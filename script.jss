document.addEventListener('DOMContentLoaded', () => {
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    const countUp = () => {
        // Set start time: January 24, 2025, at 12:00 PM (Noon)
        const startDate = new Date(2025, 0, 24, 12, 0, 0).getTime(); // Months are 0-based in JS
        const now = new Date().getTime();
        const timeElapsed = now - startDate;

        // Debugging log to check time difference
        console.log("Time Elapsed (ms):", timeElapsed);

        if (timeElapsed < 0) {
            console.warn("Start date is in the future. Check your system time!");
            return;
        }

        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

        console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

        // Update UI if elements exist
        if (daysElem) daysElem.innerText = days;
        if (hoursElem) hoursElem.innerText = hours;
        if (minutesElem) minutesElem.innerText = minutes;
        if (secondsElem) secondsElem.innerText = seconds;
    };

    setInterval(countUp, 1000);
    countUp(); // Run immediately on load
});