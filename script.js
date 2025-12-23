const startDate = new Date("2025-10-01T23:50:00");

function updateValue(el, value) {
    if (el.dataset.value !== String(value)) {
        el.dataset.value = value;
        el.innerHTML = `<span>${value}</span>`;
    }
}

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;
    if (diff < 0) diff = 0;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    updateValue(document.getElementById("days"), days);
    updateValue(document.getElementById("hours"), hours);
    updateValue(document.getElementById("minutes"), minutes);
    updateValue(document.getElementById("seconds"), seconds);
}

setInterval(updateTimer, 1000);
updateTimer();
