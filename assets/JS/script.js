const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hour = dateToday.getHours()
    let minute = dateToday.getMinutes()
    let second = dateToday.getSeconds()

    if(hour >= 0 && hour <= 9 ) {
        hour = '0' + hour;
    }

    if(minute >= 0 && minute <= 9) {
        minute = '0' + minute;
    }

    if(second >= 0 && second <= 9) {
        second = '0' + second;
    }

    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
})