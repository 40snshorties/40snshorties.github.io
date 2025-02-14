document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-audio');

    // Add event listener to the play button
    playButton.addEventListener('click', () => {
        audio.volume = 0.5; // Set volume level (0.0 to 1.0)
        audio.play().then(() => {
            console.log('Audio is playing');
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    });

    // Countdown function to calculate time remaining
    const countdown = () => {
        const endDate = new Date("Aug 20, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("message").innerText = "Happy 9 Month Anniversary!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    };

    // Start the countdown
    const timer = setInterval(countdown, 1000);
    countdown(); // Run once to avoid delay in displaying numbers
});
