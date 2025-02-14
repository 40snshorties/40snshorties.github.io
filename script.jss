document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');

    // Play music when button is clicked
    playButton.addEventListener('click', () => {
        audio.volume = 0.5;
        audio.play().catch(error => console.error("Error playing audio:", error));
    });

    // Count **up** from January 24, 2025
    const countUp = () => {
        const startDate = new Date("Jan 24, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeElapsed = now - startDate;

        // Ensure it's counting up correctly from January 24, 2025
        if (timeElapsed >= 0) {
            const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        }
    };

    // Update every second
    setInterval(countUp, 1000);
});
