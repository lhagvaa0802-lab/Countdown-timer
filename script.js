const showDay = document.getElementById("day-countdown");
const showHours = document.getElementById("hours-countdown");
const showMinutes = document.getElementById("min-countdown");
const showSeconds = document.getElementById("sec-countdown");

const setDate = new Date(2026, 0, 2, 0, 11, 30);

const myTime = () => {
  const curentDate = new Date();
  const diffTime = setDate - curentDate;
  const day = new Date(diffTime).getDay();
  const hour = new Date(diffTime).getHours();
  const min = new Date(diffTime).getMinutes();
  const sec = new Date(diffTime).getSeconds();
  showDay.textContent = day;
  showHours.textContent = hour;
  showMinutes.textContent = min;
  showSeconds.textContent = sec;
};
setInterval(myTime, 1000);
