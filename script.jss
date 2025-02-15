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
        const startDate = new Date("Jan 24, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeElapsed = now - startDate;

        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

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