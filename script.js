const showDay = document.getElementById("day-countdown");
const showHours = document.getElementById("hours-countdown");
const showMinutes = document.getElementById("min-countdown");
const showSeconds = document.getElementById("sec-countdown");

const setDate = new Date(2026, 5, 11, 0); // June 11, 2026

const myTime = () => {
  const currentDate = new Date();
  const diffTime = setDate - currentDate;

  if (diffTime <= 0) {
    showDay.textContent = 0;
    showHours.textContent = 0;
    showMinutes.textContent = 0;
    showSeconds.textContent = 0;
    return;
  }

  const day = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diffTime / (1000 * 60)) % 60);
  const sec = Math.floor((diffTime / 1000) % 60);

  showDay.textContent = day;
  showHours.textContent = hour;
  showMinutes.textContent = min;
  showSeconds.textContent = sec;
};

setInterval(myTime, 1000);
