// Assignment Day - 27
// 1. Increment and Decrement Operators
// Q.1
/*
let i = 11;
i = i++ + ++i;
console.log(i);
*/

// Q.2
/*
let a = 11;
let b = 22;
let c;
c = a+b + a++ + b++ + ++a + ++b;
console.log("a="+a); //13
console.log("b="+b); //24
console.log("c="+c); //103
*/

// Q.3
/*
let i = 0;
i = i++ - --i + ++i - i--;
console.log(i); // 0
*/

//Q.4
/*
let b = true;
b++;
console.log(b); // 2
*/

// 2. Complex Increment and Decrement Operators
// Q.5
/*
let i = 1;
let j = 2;
let k = 3;
let m = i-- - j-- - k--;
console.log("i"+ i); // 0
console.log("j"+ j); // 1
console.log("k"+ k); // 2
console.log("m"+ m); // -4  
*/

// Q.6
/*
let a = 1;
let b = 2;
console.log(--b - ++a + ++b - --a); // 0
*/

// Q.7
/*
let i = 19;
let j = 29;
let k;
k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
console.log("i"+i); // 19
console.log("j"+j); // 29
console.log("k"+k); // -20
*/

// 3. Syntax error and logical issues
// Q.8
/*
let i = 11;
let j = --(i++);
console.log(j); // show error
*/

// Q.9
/*
let m = 0;
let n = 0;
let p = --m * --n * n-- * m--;
console.log(p); // 1
*/

// Q.10
/*
let a = 1;
a = a++ + ++a * --a - a--;
console.log(a); // 5
*/

// Q.11
/*
let a = 11++;
console.log(a); // show error
*/

// Q.12
/*
let i = 0;
let j = 0;
console.log(--i*i++ * ++j*j++); // 1
*/
function sum(a, b) {
    return a + b;
 
 }
 
 let newsum = sum(5, 5);
 console.log(newsum);






