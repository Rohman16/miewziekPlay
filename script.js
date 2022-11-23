const myAudio = document.getElementById("audio");
const timeTrack = document.querySelector(".timeSong");
let isPlaying = false;

function playIt() {
  isPlaying = true;
  myAudio.play();
}

function pauseIt() {
  isPlaying = false;
  myAudio.pause();
}
let songPlay;
myAudio.onplaying = () => {
  songPlay = setInterval(takeTime, 1000);
};

myAudio.onpause = () => {
  clearInterval(songPlay);
};

let time = 0;
let timeMinute = 0;

function takeTime() {
  let timeMinuteUse = "";
  if (time == 60) {
    time = 0;
    timeMinute++;
  }
  if (time < 10) {
    time = "0" + time;
  }
  if (timeMinute < 10) {
    timeMinuteUse = "0" + timeMinute;
  }
  timeTrack.innerHTML = `${timeMinuteUse}:${time}`;
  time++;
}
