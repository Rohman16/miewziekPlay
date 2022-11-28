const myAudio = document.getElementById("audio");
const tezt = document.getElementById("test")
const timeTrack = document.querySelector(".timeSong");
const sliderBar = document.getElementById("timeSpan");
let isPlaying = false;
let songPlay = 0;

let time = 0;
let timeSecond = 0;
let timeMinute = 0;
let timeDuration = 0;
let slideMove = 0;
let slideStep = 0;
myAudio.load()


function playIt() {
    isPlaying = true;
    myAudio.play();
}

function pauseIt() {
    isPlaying = false;
    myAudio.pause();
}

function stopIt() {
    isPlaying = false;
    myAudio.pause();
    slideMove = sliderBar.value = myAudio.currentTime = 0;
    timeTrack.innerHTML = `00:00`;
}


let txt = 0;
let timeBegin = myAudio.currentTime
myAudio.onplay = () => {
    songPlay = setInterval(takeTime, 1000, slideStep, timeBegin);
}


function takeTime1(teme) {
    txt += teme;
    tezt.innerHTML = txt;
}

myAudio.onpause = () => {
    clearInterval(songPlay);
};

myAudio.oncanplay = () => {
    sliderBar.value = 0;
    timeDuration = myAudio.duration;
    slideStep = 100 / timeDuration;
    timeMinute = 0;
};

function takeTime(audTime, begin) {
    let timeSecondUse = "";
    if (begin >= 60) {
        timeSecond = Math.floor(begin / slideStep) % 60;
        if (timeSecond == 0) {
            timeMinute++;
        }
    } else {
        timeSecond = Math.floor(begin / slideStep);
    }

    if (timeSecond < 10) {
        timeSecondUse = "0" + timeSecond;
    } else {
        timeSecondUse = timeSecond
    }

    timeTrack.innerHTML = `0${timeMinute}:${timeSecondUse}`;

    begin += audTime;
    sliderBar.value = begin.toString();
}
// const test = document.getElementById("test")
sliderBar.oninput = () => {
    clearInterval(songPlay);
}
sliderBar.onchange = () => {
    slideMove = sliderBar.value
    myAudio.currentTime = sliderBar.value * slideStep
    playIt()
};

// sliderBar.oninput = () => {
//   myAudio.currentTime = sliderBar.value;
// };