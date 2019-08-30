let workTime = 1500;
let breakTime = 300;
let time = workTime;
let workMode = true;
let active;

function startWork() {
  active = setInterval(countdown, 1000);
}

function pauseWork() {
  clearInterval(active);
}

function reset() {
  time = workTime;
  workMode = true;
  display(time);
}

function stopWork() {
  clearInterval(active);
  time = workTime;
  workMode = true;
  display(time);
}

function setWorkTime(entry) {
  workTime = parseInt(entry) * 60;
}

function setBreakTime(entry) {
  breakTime = parseInt(entry) * 60;
}

function display(time) {
  let minutes = Math.round(time / 60);
  let seconds = Math.round(time % 60);

  let mString = stringify(minutes);
  let sString = stringify(seconds);

  return `${mString}:${sString}` //turn this into DOM manipulation
}

function stringify(number){
  let nString;
  if (number < 10) {
    nString = `0${number}`;
  } else {
    nString = `${number}`;
  }
  return nString;
}

function countdown() {
  time -= 1;
  display(time);
  console.log(display(time));
  if(time <= 0){
    swap();
  }
}

function swap() {
  if (workMode == true) {
    console.log("break time!")
    workMode = false;
    time = breakTime;
    display(time);
  } else {
    console.log("work time!")
    workMode = true;
    time = workTime;
    display(time);
  }
}


