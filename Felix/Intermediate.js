// Capitalize

function capitalize(string) {
    var string_C = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(string_C);
}

capitalize("hello my name is felix and i am cool");

// Average Grade

function average_grade(math, physics, english) {
    sum = math + physics + english;
    average = sum / 3;
    console.log(`Sum: ${sum} \nAverage: ${average}`);
}

average_grade(3, 3, 3)