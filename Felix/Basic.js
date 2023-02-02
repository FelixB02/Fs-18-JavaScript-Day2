// 1.)
let temperature = Math.floor(Math.random() * 25 - 5);

// console.log(temperature)

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
    year1 = current_Time - birth_year;
    year2 = year1 - 1;
    console.log("You are either " + year1 + " or " + year2 + " years old.");
}

ageCalculator(2002);

// 6.)

function degree_radian(degrees) {
    var pi = Math.PI;
    radian = degrees * (pi / 180);
    console.log(radian)
}

degree_radian(90)

// 7.)

function box_calculations(width, height, depth) {
    area = width * height;
    volume = area * depth;
    return (area, volume);
}

box_calculations(7, 2, 5)

console.log(`The area of the box is ${area} and the volume of the box is ${volume}.`);