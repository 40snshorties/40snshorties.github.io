document.addEventListener("DOMContentLoaded", () => {

    // 💖 When you met
    const startDate = new Date(2025, 9, 1, 23, 50, 0).getTime();

    function countUp() {
        const now = Date.now();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    countUp();                 // run instantly
    setInterval(countUp, 1000); // update every second
});
