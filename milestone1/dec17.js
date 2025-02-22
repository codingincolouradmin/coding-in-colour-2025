//Pass by value (numbers and strings)
function updateValue(value){
  value = value+1;
  return value;

}

let num = 10;
console.log(updateValue(num));
console.log(num);



//pass by reference (arrays and objects)

function updateArray(arr){
  arr.push(4);
  return arr;
}

let myArray = [1,2,3];
console.log(updateArray(myArray));
console.log(myArray);

// Question 2: 
// How can higher-order functions be used to filter an array based on specific 
// conditions? Provide an example of filtering an array for even numbers 
// and numbers greater than three.

// Higher Order Function
function filterArray(arr,callback){
  let result = [];
  for(let i=0; i<arr.length ; i++){
      if(callback(arr[i])){
          result.push(arr[i]);

      }
  }
  return result;
}


// Callback Functions
function isEven(num){
  return num % 2 === 0;

}
function isGreaterThanThree(num){
  return num > 3;

}

// Using the higher order function
let numbers1 = [1,2,3,4,5];
console.log(filterArray(numbers1,isEven));
console.log(filterArray(numbers1,isGreaterThanThree));

// Array Functions
// Example: map(), filter()

let numbers2 = [1,2,3,4,5];


// Using map to create a new array with each number doubled

let doubled = numbers2.map(num => num * 2);
console.log(doubled);
console.log(numbers2);

// Using filter to create a new array with numbers greater than 2
let filtered = numbers2.filter(num => num >2);
console.log(filtered);




// String Functions
// Example: split(), toUpperCase(), and replace()
let str = "Hello , world !";

// Using split to create an array of words
let words = str.split(" ");
console.log(words);

// Using toUpperCase to convert the string to uppercase
let upperStr = str.toUpperCase();
console.log(upperStr);


// Using replace to replace "world" with "JavaScript"
let replaceStr = str.replace('world','JavaScript');
console.log(replaceStr);


// Math Functions
// Example: Math.max(), Math.min(), and Math.random()
let a = 5;
let b = 10;
let c = -3;

// Using Math.max to find the maximum value
let maxVal = Math.max(a,b,c);
console.log(maxVal);

// Using Math.min to find the minimum value
let minVal = Math.min(a,b,c);
console.log(minVal);

// Using Math.random to generate a random number between 0 and 1
let randomVal = Math.random();
let wholeNum = randomVal * 100;
console.log(randomVal);
console.log(wholeNum);
console.log(Math.floor(wholeNum));
console.log(Math.ceil(wholeNum));

// Built-in Functions
// Example: parseInt(), parseFloat(), and isNaN()
let intStr = "1";
let floatStr = "123.45"
let nanStr = "abc";
let v = 6;

// Using parseInt to convert a string to an integer
console.log(intStr);
console.log(parseInt(intStr) + 2);

// Using parseFloat to convert a string to a floating-point number
console.log(parseFloat(floatStr) + 1.2);

// Using isNaN to check if a value is NaN (Not-a-Number)
console.log(isNaN(nanStr));

//toString
console.log(v.toString());

// 1. Function to Add Two Numbers
// Create a function that takes two numbers as parameters and returns their sum.




// 2. Function to Find the Largest Number
// Write a function that takes two numbers and returns the larger number.




// 3. Function to Check Even or Odd
// Create a function that checks whether a number is even or odd.




// 4. Function to Square a Number
// Write a function that takes a number and returns its square.




// 5. Function to Calculate Area of a Rectangle
// Create a function that takes the length and width of a rectangle and returns its area.




// 6. Function to Reverse a String
// Write a function that takes a string and returns the reversed version of the string.



// 7. Function to Find the Factorial of a Number
// Create a function that finds the factorial of a given number.




// 8. Function to Return the First Letter of Each Word
// Write a function that takes a sentence and returns the first letter of each word.




// 9. Function to Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number.




// 10. Function to Count Vowels in a String
// Write a function that counts the number of vowels in a string.


