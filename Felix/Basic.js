// 1.)
let temperature = Math.floor(Math.random() * 30 - 5);

console.log(temperature)

if (temperature <= 10) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}

// 2.)
let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate", "Nachos", "Lasagne"];

function randomFoods() {
    randomFood = favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)];
}

randomFoods()
console.log(randomFood)

// 3.)

function crystalGazer(number_of_childen, partners_name, geographic_location, job_title) {
    console.log("You will be a " + job_title + " in " + geographic_location + " and married to " + partners_name + " with " + number_of_childen + ".");
}

crystalGazer("4 Children", "Anna", "Vienna", "Programmer");

// 4.) 5.)

var currentTime = new Date()

function ageCalculator(birth_year) {
    current_Time = currentTime.getFullYear()
    let year1 = current_Time - birth_year;
    let year2 = year1 - 1;
    let yearsresult = [year1, year2];
    return (yearsresult);
}


yearsres1 = ageCalculator(2002)
yearsres2 = ageCalculator(1967)

console.log(`You are either ${yearsres1[0]} or ${yearsres1[1]} years old`);
console.log(`You are either ${yearsres2[0]} or ${yearsres2[1]} years old`);

// 6.)

function degree_radian(degrees) {
    var pi = Math.PI;
    radian = degrees * (pi / 180);
    console.log(radian)
}

degree_radian(90)

// 7.)

function box_calculations(width, height, depth) {
    let area = width * height;
    let volume = area * depth;
    let areasresult = [area, volume];
    return (areasresult)
}



areasres1 = box_calculations(7, 2, 5)
areasres2 = box_calculations(10, 15, 7)
console.log(`The area of the box is ${areasres1[0]} and the volume of the box is ${areasres1[1]}.`);
console.log(`The area of the box is ${areasres2[0]} and the volume of the box is ${areasres2[1]}.`);