const myAudio = document.getElementById("audio");
const timeTrack = document.querySelector(".timeSong");
const sliderBar = document.getElementById("timeSpan");
let isPlaying = false;
let songPlay;

let time = 0;
let timeMinute = 0;
let timeDuration = 0;
let slideMove = 0;
let slideStep = 0;

function playIt() {
    isPlaying = true;
    // myAudio.load()
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

// myAudio.onplaying = () => {
//   songPlay = setInterval(takeTime, 1000);
// };

myAudio.addEventListener("play", () => {
    songPlay = setInterval(takeTime, 1000);
})

myAudio.onpause = () => {
    clearInterval(songPlay);
};

myAudio.oncanplay = () => {
    sliderBar.value = 0;
    timeDuration = myAudio.duration;
    slideStep = 100 / timeDuration;
    time = 0;
    timeMinute = 0;
};

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
    slideMove += slideStep;
    sliderBar.value = slideMove.toString();
}
// const test = document.getElementById("test")
sliderBar.oninput = () => {
    clearInterval(songPlay)
}
sliderBar.onchange = () => {
    let timeMinuteUse = 0;
    let timeUse = 0;
    let barVal = 0;
    // Determine Bar Value in Secondbar
    // Put to barVal
    barVal = sliderBar.value / slideStep; //in seconds

    //update new position of the bar, with new time
    // Convert to Bar Value form Seconds
    slideMove = Math.floor(barVal * slideStep);
    myAudio.currentTime = barVal;
    timeMinuteUse = Math.floor(barVal / 60)
    time = barVal % timeMinuteUse
    if (time < 10) {
        timeUse = "0" + time
    } else {
        timeUse = time;
    }
    timeTrack.innerHTML = `0${timeMinuteUse}:${timeUse}`
    sliderBar.value = slideMove.toString();
    setInterval(takeTime, 1000)
};

// sliderBar.oninput = () => {
//   myAudio.currentTime = sliderBar.value;
// };