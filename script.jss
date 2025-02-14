document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    if (playButton && audio) {
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.volume = 0.5;
                audio.play().catch(error => console.error("Error playing audio:", error));
            } else {
                audio.pause();
            }
        });
    }

    const countUp = () => {
        const startDate = new Date("January 24, 2025 12:00:00").getTime(); // Noon on Jan 24, 2025
        const now = new Date().getTime();
        const timeElapsed = now - startDate;

        if (timeElapsed < 0) {
            console.warn("Start date is in the future. Check your system time!");
            return;
        }

        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

        console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

        if (daysElem && hoursElem && minutesElem && secondsElem) {
            daysElem.innerText = days;
            hoursElem.innerText = hours;
            minutesElem.innerText = minutes;
            secondsElem.innerText = seconds;
        }
    };

    setInterval(countUp, 1000);
    countUp(); // Run immediately on load
});