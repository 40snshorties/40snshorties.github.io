const startDate = new Date("2025-10-01T23:50:00");

function updateValue(el, value) {
    if (el.dataset.value !== String(value)) {
        el.dataset.value = value;
        el.innerHTML = `<span>${value}</span>`;
    }
}

function updateTimer() {
    const now = new Date();
    if (now < startDate) {
        updateValue(document.getElementById("months"), 0);
        updateValue(document.getElementById("days"), 0);
        updateValue(document.getElementById("hours"), 0);
        return;
    }

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();

    // Adjust for negative hours
    if (hours < 0) {
        hours += 24;
        days--;
    }

    // Adjust for negative days
    if (days < 0) {
        months--;
        // Get the number of days in the previous month to roll over accurately
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    const totalMonths = (years * 12) + months;

    updateValue(document.getElementById("months"), totalMonths);
    updateValue(document.getElementById("days"), days);
    updateValue(document.getElementById("hours"), hours);
}

// Update every minute instead of every second since seconds are gone
setInterval(updateTimer, 60000);
updateTimer();
