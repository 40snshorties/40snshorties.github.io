document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');

    // Play music when button is clicked
    playButton.addEventListener('click', () => {
        audio.volume = 0.5;
        audio.play().catch(error => console.error("Error playing audio:", error));
    });

    // Count up from January 24, 2025, at 12:00 PM
    const countUp = () => {
        const startDate = new Date(2025, 0, 24, 12, 0, 0).getTime(); // Jan = 0 in JS
        const now = new Date().getTime();
        const timeElapsed = now - startDate;

        if (timeElapsed >= 0) {
            const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        } else {
            console.log("Start date is in the future.");
        }
    };

    // Update every second
    setInterval(countUp, 1000);
    countUp(); // Run immediately so there's no delay
});