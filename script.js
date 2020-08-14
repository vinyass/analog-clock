const hourHand = document.querySelector(".hand.hour");
const minuteHand = document.querySelector(".hand.minute");
const secondHand = document.querySelector(".hand.second");

setInterval(() => {
  updateClock();
}, 1000);

function updateClock() {
  const date = new Date();
  const secondFr = date.getSeconds() / 60;
  const minuteFr = (secondFr + date.getMinutes()) / 60;
  const hourFr = (minuteFr + date.getHours()) / 12;

  secondHand.setAttribute("style", `--rotation: ${secondFr * 360}`);
  minuteHand.setAttribute("style", `--rotation: ${minuteFr * 360}`);
  hourHand.setAttribute("style", `--rotation: ${hourFr * 360}`);
}

updateClock();
