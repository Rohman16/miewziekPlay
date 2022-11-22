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
myAudio.onplaying = () => {
    if (!myAudio.onpause) {
        setInterval(takeTime, 1000);
    }
};

let time = 0;
let minute = 0;

function takeTime() {
    let zero = "0";
    if (time < 10) {
        if (time == 6) {
            time = 0;
            minute++;
            if (minute < 10) {
                minute = zero + minute;
            }
        }
        time = zero + time;
    }
    timeTrack.innerHTML = `${minute}:${time}`;
    time++;
}