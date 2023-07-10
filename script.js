const horas = document.querySelector(".hours");
const minutos = document.querySelector(".minutes");
const segundos = document.querySelector(".seconds");

function setClock() {
  const data = new Date();
  const hours = data.getHours().toString().padStart(2, "0");
  const minutes = data.getMinutes().toString().padStart(2, "0");
  const seconds = data.getSeconds().toString().padStart(2, "0");

  horas.textContent = `${hours} :`;
  minutos.textContent = `${minutes} :`;
  segundos.textContent = `${seconds}`;
}

function updateClock() {
  setInterval(setClock, 1000);
}

window.addEventListener("load", updateClock);
