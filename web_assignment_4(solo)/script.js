
const fullName = "Акбота"; 
const isStudent = true;

let age = 21;
let favoriteColor = "зеленый";

console.log("Имя:", fullName, "Тип:", typeof fullName);
console.log("Возраст:", age, "Тип:", typeof age);
console.log("Студент:", isStudent, "Тип:", typeof isStudent);
console.log("Любимый цвет:", favoriteColor, "Тип:", typeof favoriteColor);


age = 22;
console.log("Новый возраст:", age);

//..


let userName = prompt("Как тебя зовут?", "Бота");

if (userName) {
    alert("Привет, " + userName + "! Добро пожаловать!");
}

let group = "MT-2502";
let greetingMessage = `Студентка: ${userName || "Бота"}, Группа: ${group}`;

console.log(greetingMessage);

//..

let num1Str=prompt("First number: ", "12");
let num2Str=prompt("Second number: ", "5");

let num1= Number(num1Str);
let num2= Number(Number(num2Str));

let sum=num1+num2;
let difference=num1 -num2;
let product= num1*num2;
let quotient=num1/num2;
let remainder=num1 % num2;

console.log("Number 1: ", num1, "| Number 2: ", num2);
console.log("sum: ", sum);
console.log("diff: ", difference);
console.log("product: ", product);
console.log("quotient: ", quotient);
console.log("remainder: ", remainder);

//..

let myFullName = "Akbota";
console.log("Name length: ", myFullName.length);
console.log("Upper case: ", myFullName.toUpperCase());
console.log("Lower Case: ", myFullName.toLowerCase());
console.log("First 3 letters: ", myFullName.slice(0, 3));

let part1 = "I love";
let part2 = "my little pony";
let fullSentence = part1 + " " + part2;
console.log("full: ", fullSentence);

//..

let counter = 10;
console.log("Начальное значение counter:", counter);

counter++; 
console.log("После counter++:", counter);

counter--; 
console.log("После counter--:", counter);

counter += 5; 
console.log("После counter += 5:", counter);

counter -= 3; 
console.log("После counter -= 3:", counter);

counter *= 2; 
console.log("После counter *= 2:", counter);

counter /= 4; 
console.log("После counter /= 4:", counter);

//..

let dogAge1 = 2;
let humanAge1= (dogAge1 -2)*4 +21;
console.log("If dogs age is ", dogAge1, " them human age is: ", humanAge1);

let dogAge2 =5;
let humanAge2= (dogAge2 -2)*4 +21;
console.log("If dogs age is ", dogAge2, " them human age is: ", humanAge2);

//..

function greetUser(name) {
    console.log("Hello ", name, "!");
}

greetUser("Twilight");
greetUser("Apple Jack");

function calculateSum(a,b){
    return a+b;
}

console.log("Sum 5 and 10 =", calculateSum(5, 10));
console.log("Sum 123 and 456=", calculateSum(123,456));

function calculateRectangleArea(width, height) {
    return width*height;
}

console.log("Area of rectangle 5*2 =", calculateRectangleArea(5, 2));
console.log("Area of rectangle 6*7 =", calculateRectangleArea(6, 7));