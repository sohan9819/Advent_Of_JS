const startBtn = document.querySelector(".start");
const settings = document.querySelector(".settings");

const mins = document.querySelector(".minutes > input");
const secs = document.querySelector(".seconds > input");

const ring = document.querySelector(".ring");

setMin = mins.value;
setSec = secs.value;

let time;
let timerState = true;

const stateHanlder = () => {
  timerState = !timerState;
  startBtn.innerText = timerState === false ? "pause" : "start";
};

const startStop = (e) => {
  stateHanlder();
  console.log(timerState);
  ring.classList.remove("ending");
  timerState === false ? clockStart() : clockStop();
  settings.disabled = !settings.disabled;
};

const timeFormater = () => {
  // mins
  if (+mins.value < 10 && mins.value.length <= 1) {
    mins.value = `0${mins.value}`;
  }
  // secs
  if (+secs.value < 10 && secs.value.length <= 1) {
    secs.value = `0${secs.value}`;
  }
};

const inputHandler = () => {
  const exp = /[0-9][0-9]/g;
  const regex = new RegExp(exp);
  if (
    secs.value.match(regex) == null ||
    secs.value.length > 2 ||
    +secs.value > 59
  ) {
    console.log("Input error");
    ringAdd();
    return false;
  }
  if (
    mins.value.match(regex) == null ||
    mins.value.length > 2 ||
    +mins.value > 59
  ) {
    ringAdd();
    console.log("Input error");
    return false;
  }
  ring.classList.remove("ending");
  return true;
};

function ringAdd() {
  if (ring.classList.contains("ending") == false) {
    ring.classList.add("ending");
  }
}

function clockStart() {
  time = setInterval(() => {
    if (+secs.value === 0) {
      secs.value = 59;
      mins.value--;
      timeFormater();
    } else {
      secs.value--;
    }
    timeFormater();

    if (+mins.value == 0) {
      ring.classList.toggle("ending");
    }

    if (+secs.value <= 0 && +mins.value <= 0) {
      clockStop();
      ring.classList.add("ending");
      stateHanlder();
    }

    if (+secs.value < 0 || +mins.value < 0) {
      clockStop();
      secs.value = "00";
      mins.value = "00";
      ringAdd();
      stateHanlder();
      settings.disabled = false;
    }
  }, 1000);
}

function clockStop() {
  clearTimeout(time);
}

startBtn.addEventListener("click", startStop);
settings.addEventListener("click", (e) => {
  startBtn.disabled = true;
  if (secs.disabled == false || mins.disabled == false) {
    startBtn.disabled = false;
  }
  timeFormater();
  if (inputHandler() == false) {
    startBtn.disabled = true;
  } else {
    secs.disabled = !secs.disabled;
    mins.disabled = !mins.disabled;
    timeFormater();
  }
});
