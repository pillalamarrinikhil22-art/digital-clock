// Get HTML elements

const clock = document.getElementById("clock");
const date = document.getElementById("date");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// ===============================
// DIGITAL CLOCK
// ===============================

function updateClock() {

    // Create a new Date object
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 before single digit numbers
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    clock.textContent = `${hours}:${minutes}:${seconds}`;


    // Display date
    date.textContent = now.toDateString();
}


// Run clock every second
setInterval(updateClock, 1000);


// Run once immediately
updateClock();


// ===============================
// NEW YEAR COUNTDOWN
// ===============================

function updateCountdown() {

    // Get current date and time
    const now = new Date();

    // Get current year
    const currentYear = now.getFullYear();

    // Set New Year date
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);

    // Calculate remaining time
    const difference = newYear - now;


    // Convert milliseconds into days
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    // Calculate hours
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    // Calculate minutes
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    // Calculate seconds
    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display countdown

    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");
}


// Update countdown every second
setInterval(updateCountdown, 1000);


// Run once immediately
updateCountdown();