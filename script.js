const myAudio = document.getElementById("audio");
const timeTrack = document.querySelector(".timeSong");
const sliderBar = document.getElementById("timeSpan");
let isPlaying = false;
// let songPlay;

let time = 0;
let timeOnSpot = 0;
let timeSecond = 0;
let timeMinute = 0;
let timeDuration = 0;
let slideMove = 0;
let slideStep = 0;
let songPlay = 0;
let songTime = 0;

function playIt() {
  // myAudio.currentTime = timeOn;
  myAudio.play();
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

myAudio.onplay = () => {
  songPlay = setInterval(displayOn, 1000, myAudio.currentTime);
};

myAudio.onpause = () => {
  slideStep = 0;
  clearInterval(songPlay);
};

myAudio.oncanplay = () => {
  sliderBar.value = 0;
  timeDuration = myAudio.duration;
  slideStep = 100 / timeDuration;
};

function displayOn(audTme) {
  let timeSecondUse = "";
  //Check and separate the time (into Minutes & second)
  if (audTme >= 60) {
    timeSecond = Math.floor(audTme) % 60;
    if (timeSecond == 0) {
      timeMinute++;
    }
  } else {
    timeSecond = Math.floor(audTme);
  }

  if (timeSecond < 10) {
    timeSecondUse = "0" + timeSecond;
  } else {
    timeSecondUse = timeSecond;
  }
  slideMove = (audTme / myAudio.duration) * 100;
  sliderBar.value = slideMove.toString();
  timeTrack.innerHTML = `0${timeMinute}:${timeSecondUse}`;
}

function takeTime(audTme) {
  let timeSecondUse = "";
  songTime = audTme;
  //Check and separate the time (into Minutes & second)
  if (songTime >= 60) {
    timeSecond = Math.floor(songTime) % 60;
    if (timeSecond == 0) {
      timeMinute++;
    }
  } else {
    timeSecond = songTime;
  }

  timeSecond = Math.floor(timeSecond);

  if (timeSecond < 10) {
    timeSecondUse = "0" + timeSecond;
  } else {
    timeSecondUse = timeSecond;
  }
  slideMove = (audTme / myAudio.duration) * 100;
  sliderBar.value = slideMove.toString();
  timeTrack.innerHTML = `0${timeMinute}:${timeSecondUse}`;
}

// sliderBar.oninput = () => {
//   myAudio.onplay = null;
// };

sliderBar.onchange = () => {
  timeOnSpot = sliderBar.value / slideStep;
  slideMove = sliderBar.value;
  playIt(timeOnSpot);
};
