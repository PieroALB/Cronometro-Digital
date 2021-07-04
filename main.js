import {seconds,minutes,hours} from "./modules.js";

let btnStart = document.querySelector("#btnStart");
let btnEnd = document.querySelector("#btnEnd");
let boxHours = document.querySelector("#hours");
let boxMinutes = document.querySelector("#minutes");
let boxSeconds = document.querySelector("#seconds");
let contSeconds = 0;
let contMinutes = 0;
let contHours = 0;
let interval = null;

function cronometro() {
  contSeconds += 1; 
  boxSeconds.innerHTML = seconds(contSeconds);

  if (contSeconds == 60) {
    contMinutes += 1;
    contSeconds = 0; 
    boxMinutes.innerHTML = minutes(contMinutes) ;
    boxSeconds.innerHTML =  seconds(contSeconds);
  }

  if (contMinutes == 60) {
    contHours += 1;
    contMinutes = 0;
    boxHours.innerHTML = hours(contHours);
    boxMinutes.innerHTML = minutes(contMinutes);
  }
}

btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cronometro iniciado");
  interval = setInterval(cronometro, 1000);
});

btnEnd.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cronometro terminado");
  clearInterval(interval);
});
