document.addEventListener("DOMContentLoaded", () => {
    // Set the start date/time to match 81 days, 22 hours, 7 minutes ago from now
    const now = new Date();
    const startDate = new Date(
        now.getTime() - (
            81 * 24 * 60 * 60 * 1000 + // 81 days
            22 * 60 * 60 * 1000 +      // 22 hours
            7 * 60 * 1000               // 7 minutes
        )
    ).getTime();

    function countUp() {
        const currentTime = new Date().getTime();
        let timeElapsed = currentTime - startDate;

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
