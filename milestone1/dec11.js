// // Write a program that asks a user to input a number greater than 10. Keep asking until the user provides a valid number.

// // User prompt-sync
// // Use while loop

const prompt = require('prompt-sync')()

// get initial input from the user.
let number = prompt('Please enter a number greater than 10: ')  
// loop
while (number <= 10 || isNaN(number)) { // condtion number > 10 (valid). if user entered number <= 10 (invalid and keep asking)
    number = prompt("invalid input, please enter a NUMBER greater than 10: ")
}
console.log(`you entered a valid number ${number}`)

/**
 * 
 * 
 * 
 */

// Write a program that generates a random number between 1 and 10. The program should print the number and then check if it equals 7. 
// If not, it should generate a new random number and repeat the process. Ensure that the loop runs at least once, even if the first number is 7. 

// Use math library
// Use do-while loop

let randomNubmer = 0;
do {
    randomNubmer = Math.floor(Math.random() * 10) + 1 // get random number  between 1 - 10
    console.log(randomNubmer) // print random number
} while (randomNubmer !== 7); // If number generated is not 7, then continue the loop. (!== means 'not equal') 

console.log(`The number ${randomNubmer} is generated randomly`)
