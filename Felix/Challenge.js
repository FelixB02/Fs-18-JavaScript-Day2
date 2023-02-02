function timeConvert(minutes) {
    let minutess = minutes
    let hours = Math.floor(minutes / 60);
    let minutesr = minutes % 60

    let result = [hours, minutesr, minutess]
    return (result)
}




console.log(`${timeConvert(200)[2]} minutes = ${timeConvert(200)[0]} hour(s) and ${timeConvert(200)[1]} minutes(s).`)
console.log(`${timeConvert(500)[2]} minutes = ${timeConvert(500)[0]} hour(s) and ${timeConvert(500)[1]} minutes(s).`)
console.log(`${timeConvert(10000)[2]} minutes = ${timeConvert(10000)[0]} hour(s) and ${timeConvert(10000)[1]} minutes(s).`)