// session 2
// console.log("Mastering javascript Math function day - 28");
console.log(Math.ceil(10.2)); //ceil
console.log(Math.floor(10.9)); // floor
console.log(Math.round(10.5)); // round
console.log(Math.abs(-5)); // abs minus to plus
console.log(Math.trunc(10.46546464654)); // digit number
console.log(Math.pow(5, 2)); // power
console.log(Math.sqrt(36)); // square root
console.log(Math.cbrt(27)); // cube root
console.log(Math.max(10, 20, 30, 40, 50)); // maximum number
console.log(Math.min(10, 20, 30, 40, 50)); // minimum number
console.log(Math.random()); // random value generate
let toFx = 20.10203;
console.log(toFx.toFixed(3)); // after two digit show value;

// Math problem
// Q.1 calculate compound interest
let p = Number(prompt("Enter principle")); // main capital
let ra = Number(prompt("Enter rate")); // rate of interest
let t = Number(prompt("Enter time")); // time

/* A = P * (1 + r/100)^t
CP = A - P
*/

console.log(p * Math.pow(1 + ra / 100, t) - p);

// Q.2 Generate OTP
console.log(Math.floor(Math.random() * 9999 + 1000));

// Q.3 area of triangle by heron's formula
let a = Number(prompt("Enter a number"));
let b = Number(prompt("Enter b number"));
let c = Number(prompt("Enter c number"));

if (a + b <= c || a + c <= b || c + b <= a) {
  console.log("not possible");
} else {
  let s = (a + b + c) / 2;
  console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
}

// Q.4 Circumference of circle
let r = Number(prompt("Enter a number"));
console.log(2 * Math.PI * r);

// If-Else
// Q.5 Accept two number and print the greatest between then
let firstNum = Number(prompt("Enter first number"));
let secondNum = Number(prompt("Enter second Number"));

if (firstNum > secondNum) console.log(firstNum + " is greates");
else console.log(secondNum + " is greatest");

// Q.6 Accept an integer and check whether it is an even number or odd
let input = Number(prompt("Enter a number"));
if (input % 2 == 0) console.log("even");
else console.log("odd");

// Q.7 Accept name and age from the user, check if the user is a valid voter or not.
let name = prompt("Enter your name");
let age = Number(prompt("Enter age"));

if (age >= 18) {
  console.log(name + " ,yes you are a valid voter");
} else {
  console.log(name + " ,you are not a valid voter");
}

//Q.8 Accept three numbers and print the greatest among them;
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

let greatNum = Math.max(num1, num2, num3);
console.log(greatNum);

// Q.9 Accept a year and check if it a leap year or not
let year = Number(prompt("Enter the year"));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("This is leap year");
} else {
  console.log("This is not leap year");
}

 