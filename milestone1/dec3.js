const prompt = require(`prompt-sync`)();

let number = 42; // the number being stored in the variable
console.log("stored number:" , number);

let mutableVariable = 10; //can be reassigned
const immutableVariable = 20; //cannot be reassigned
console.log("MV:", mutableVariable);
console.log("IMV:", immutableVariable);

mutableVariable = 20; //reassigning changable variable

console.log("MV:", mutableVariable);
console.log("IMV:", immutableVariable);

//Camel case  standard looks like this camelCase

let isJavaScriptFun = true; //Boolean value
console.log("Is javascript fun?:", isJavaScriptFun);

let x = 5;
let y = 10;

console.log("x < y" , x < y);
console.log("x > y" , x > y);
console.log("x === y" , x === y);
console.log("x !== y" , x !== y);

let a = 3;
let b = 8;
console.log("complex statement" , (x > y) && (a < b));

//How to take user input
const userInput = prompt('Enter a number: ');
console.log("userinput", userInput);

//How to use assignmeent operators
let variable = 5;

//Addition
variable += 2;
console.log("+= operator", variable);

//Substraction
variable -= 2;
console.log("-= operator", variable);

//multplication
variable *= 2;
console.log("*= operator", variable);

//division
variable /= 2;
console.log("/= operator", variable);

//exponential
variable **= 2;
console.log("**= operator", variable);

//Addition
variable ++; //only adds 1
console.log("++ operator", variable);

//Substraction
variable --; //only substracts 1
console.log("-- operator", variable);