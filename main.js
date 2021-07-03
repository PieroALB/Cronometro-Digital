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
  // console.log("seconds : ",contSeconds);
  boxSeconds.innerHTML = contSeconds;
  if (contSeconds == 60) {
    contMinutes += 1;
    contSeconds = 0;
    // console.log("Minutes : ",contMinutes);
    boxMinutes.innerHTML = contMinutes + ":";
    boxSeconds.innerHTML = contSeconds;
  }
  if (contMinutes == 60) {
    contHours += 1;
    contMinutes = 0;
    boxHours.innerHTML = contHours + ":";
    boxMinutes.innerHTML =  contMinutes + ":";
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
  // boxHours.innerHTML =  contHours;
  // boxMinutes.innerHTML = contMinutes;
  // boxSeconds.innerHTML =  contSeconds;
  clearInterval(interval);
});
