// //  console.log("Hallo Lection 9");

// // const date1 = new Date().getTime();
// // console.log('date1', date1);

// // // console.log(date.getMonth());

// // // console.log(date.getTime());

// // setTimeout(() => {
// //     const date2 = new Date().getTime();
// //     console.log('date1', date1);
// //     console.log('date2', date2);
// //     console.log(date2 - date1);
// // }, 3000)

// const date1 = Date.now().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//     const date2 = Date.now().getTime();
//     console.log('date1', date1);
//     console.log('date2', date2);
//     console.log(date2 - date1);
// }, 3000)

//========== TIMER
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clock'),
}

const timer = {
intervalId : null,
isActive: false,
    start() {
        if(this.isActive) {
            return;
        }
const startTime = Date.now();
this.isActive = true;

this.intervalId = setInterval(() => {
const currentTime = Date.now();
const time = currentTime - startTime;
const timeClock = getTime(time);
updateClock(timeClock);
}, 1000)
    },

    stop () {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
}


refs.startBtn.addEventListener('click', () => {
    timer.start();
})

refs.stopBtn.addEventListener('click', () => {
    timer.stop();
})

function updateClock ({hours, mins, secs}) {
    refs.clockface.textContent = `${hours} : ${mins} : ${secs} `;
}

function getTime(time) {
    const hours = 
    pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {hours, mins, secs};
}

function pad(value) {
    return String(value).padStart(2, '0');
}

getTime(time);