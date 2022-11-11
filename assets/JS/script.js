const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hour = dateToday.getHours()
    let minute = dateToday.getMinutes()
    let second = dateToday.getSeconds()

    let timeInHour = hour >= 0 && hour <= 9 ? '0' + hour : hour
    let timeInMinute = minute >= 0 && minute <= 9 ? '0' + minute : minute
    let timeInSecond = second >= 0 && second <= 9 ? '0' + second : second

    hours.textContent = timeInHour;
    minutes.textContent = timeInMinute;
    seconds.textContent = timeInSecond;
})