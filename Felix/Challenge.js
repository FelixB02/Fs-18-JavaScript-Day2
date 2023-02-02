function timeConvert(minutes) {
    let minutess = minutes
    let hours = Math.floor(minutes / 60);
    let minutesr = minutes % 60

    let result = [hours, minutesr, minutess]
    return (result)
}



let res = timeConvert(200);
let res1 = timeConvert(500);
let res2 = timeConvert(10000);
console.log(`${res[2]} minutes = ${res[0]} hour(s) and ${res[1]} minutes(s).`)
console.log(`${res1[2]} minutes = ${res1[0]} hour(s) and ${res1[1]} minutes(s).`)
console.log(`${res2[2]} minutes = ${res2[0]} hour(s) and ${res2[1]} minutes(s).`)