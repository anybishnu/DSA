// Q.1 Sum of two integer
let a = 10;
let b = 20;
console.log(a + b);

// Q.2 Relation between integer and string
/* 
string + string = string
string + integer = string
integer + integer = integer
*/
let str = "Hello";
let int = 20;
console.log(str + int);

/* Q.3 sum and message 
    - type coercion */
let num1 = 10;
let num2 = 20;
console.log("the sum of " + num1 + " and " + num2 + " is " + num1 + num2);
// the sum of 10
// the sum of 10 and
// the sum of 10 and 20
// the sum of 10 and 20 is
// the sum of 10 and 20 is 10
// the sum of 10 and 20 is 1020

// - type coercion
console.log(1 + "1");
console.log(1 - "1");
console.log(1 * "1");
console.log(1 / "1");

// Q.4 Accept and print the answer
/*
let age = Number(prompt("Enter your age"));
console.log(age);
*/

/* Q.5 Swap two variables via 3 methods
    - Operators and their questions
        - Arithmetic +, - , * , /  , %
        - Relational operator <, >, <=, >=
        - Logical operator &&, ||
        - Unary operator ++, --
*/
// First Method
let one = 222;
let two = 333;

let temp = one;
one = two;
two = temp;

console.log(one, two);

// Second Method
let first = 111;
let second = 222;

first = first + second; // 30
second = first - second; // 10
first = first - second; // 20

console.log(first, second);

// Third Method
let Num_one = 40;
let Num_two = 50;

[Num_one, Num_two] = [Num_two, Num_one];

console.log(Num_one, Num_two);

/*
- Operators and their questions
        - Arithmetic +, - , * , /  , %
        - Relational operator <, >, <=, >=
        - Logical operator &&, ||
        - Unary operator ++, --
*/
// - Arithmetic +, - , * , /  , %
console.log(4 % 10); // ans= 4; (no floating number)
console.log(4 / 10); // ans= 0.4 (floating number)

//- Relational operator <, >, <=, >=
console.log(10 <= 10); // true

//- Logical operator &&, ||
console.log(true && false); // answer is false
console.log(true || false); // answer is true

//- Unary operator ++, --
let intg = 10;
console.log(intg++ + ++intg); // answer is 10+12=22

