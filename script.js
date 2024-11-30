// Set the launch date
const launchDate = new Date("Dec 05, 2024 12:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, write some text
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "Launched!";
    }
}, 1000);
