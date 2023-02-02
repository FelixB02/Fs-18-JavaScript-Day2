// Capitalize

function capitalize(string) {
    let string_C = string.charAt(0).toUpperCase() + string.slice(1);
    return (string_C)
}

let stringC1 = capitalize("hello my name is felix and i am cool");
let stringC2 = capitalize("i am Cool")
console.log(stringC1)
document.write(stringC2)
document.write("<br>")

// Average Grade

function average_grade(math, physics, english) {
    let sum = math + physics + english;
    let average1 = sum / 3;
    let average2 = average1.toFixed(2)
    let calc = [sum, average2]
    return calc;
}

let calc1 = average_grade(3, 3, 3)
let calc2 = average_grade(4, 1, 2)

console.log(`Sum: ${calc1[0]} \nAverage: ${calc1[1]}`);
document.write(`Sum: ${calc2[0]} \nAverage: ${calc2[1]}`);