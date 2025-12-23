document.addEventListener("DOMContentLoaded", () => {
    // Set the real start date/time (e.g., when you met)
    const startDate = new Date(2025, 0, 24, 17, 0, 0).getTime(); 
    // Jan=0, 24th, 5 PM

    function countUp() {
        const now = new Date().getTime();
        let timeElapsed = now - startDate;

        if (timeElapsed < 0) timeElapsed = 0;

        const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    countUp(); // run immediately
    setInterval(countUp, 1000); // update every second
});
