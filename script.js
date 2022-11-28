const myAudio = document.getElementById("audio");
const timeTrack = document.querySelector(".timeSong");
const sliderBar = document.getElementById("timeSpan");
let isPlaying = false;
let songPlay = 0;

let time = 0;
let timeOnSpot = 0;
let timeSecond = 0;
let timeMinute = 0;
let timeDuration = 0;
let slideMove = 0;
let slideStep = 0;
myAudio.load();
let timeBegin = 0;

function playIt() {
  isPlaying = true;
  myAudio.play();
  songPlay = setInterval(takeTime, 1000);
}

function pauseIt() {
  myAudio.pause();
}

function stopIt() {
  myAudio.pause();
  clearInterval(songPlay);
  timeMinute = 0;
  timeSecond = 0;
  slideMove = slideStep = sliderBar.value = myAudio.currentTime = 0;
  timeTrack.innerHTML = `00:00`;
}

let txt = 0;

// function displayOn(timeX) {
//   songPlay = setInterval(takeTime, 1000, timeX);
// }

function takeTime1(teme) {
  txt += teme;
  tezt.innerHTML = txt;
}

myAudio.onpause = () => {
  slideStep = 0;
  clearInterval(songPlay);
};

myAudio.oncanplay = () => {
  sliderBar.value = 0;
  timeDuration = myAudio.duration;
  slideStep = 100 / timeDuration;
  timeMinute = 0;
};

function takeTime() {
  let begin = myAudio.currentTime;
  let timeSecondUse = "";
  if (begin >= 60) {
    timeSecond = Math.floor(begin) % 60;
    if (timeSecond == 0) {
      timeSecond = 0;
      timeMinute++;
    }
  } else {
    timeSecond = Math.floor(begin);
  }

  if (timeSecond < 10) {
    timeSecondUse = "0" + timeSecond;
  } else {
    timeSecondUse = timeSecond;
  }
  sliderBar.value = slideMove.toString();
  timeTrack.innerHTML = `0${timeMinute}:${timeSecondUse}`;
  begin++;
  slideMove = (begin / myAudio.duration) * 100;
}

// const test = document.getElementById("test")
sliderBar.oninput = () => {
  clearInterval(songPlay);
};
sliderBar.onchange = () => {
  slideMove = sliderBar.value;
  myAudio.currentTime = sliderBar.value * slideStep;
  playIt();
};
