// You want to decide how to spend your time based on whether it’s the weekend and whether the weather is sunny. 
//If it’s the weekend 
// and sunny, you will go to the beach. If it’s the weekend but not sunny, you will go to the movies. 
//Otherwise, you will stay at home. Write 
// a program to simulate this decision-making process for various combinations of weekend and weather conditions.

let isWeekend = true;
let isSunny = true;
let weather = "rainy"

if(isWeekend && isSunny){
    console.log("Go to the beach!");
}
else if(isWeekend && !isSunny){
    console.log("Go to the movies!");
}
else{
    console.log("Stay Home");
}

// Problem Statement:
// You want to categorize individuals into age groups based on their age. The categories are:
// "Child" for ages 0-12
// "Teenager" for ages 13-17
// "Adult" for ages 18-64
// "Senior" for ages 65 and above
// If the age is invalid (e.g., negative), the program should return "Invalid age." 
// Write a program that tests various ages and outputs the appropriate age group for each case.

let age = -14;

if(age >= 0 && age <=12){
    console.log("Child");
}
else if(age >= 13 && age <= 17){
    console.log("Teenager");
}
else if(age >= 18 && age <= 64){
    console.log("Adult");
}
else if(age >= 65){
    console.log("Senior");
}
else{
    console.log("Invalid age");
}

// Problem Statement:
// You want to assign letter grades based on a student's percentage score. The grading scale is:
// "A" for scores 90 and above
// "B" for scores 80-89
// "C" for scores 70-79
// "D" for scores 60-69
// "F" for scores below 60
// Write a program to categorize several test scores into their respective letter grades.

// Problem Statement:
// You want to determine what action a driver should take based on a traffic light's color. The rules are:
// "Stop" for red
// "Slow down" for yellow
// "Go" for green
// Write a program to simulate a driver's response to various traffic light colors.

// Problem Statement:
// You want to determine the benefits of a user based on their membership tier. The tiers and benefits are:
// "Gold" members receive "Free shipping and priority support."
// "Silver" members receive "Free shipping."
// "Bronze" members receive "Standard benefits."
// Write a program that checks the membership tier and outputs the corresponding benefits.

// Problem Statement:
// You want to suggest clothing based on the weather. The suggestions are:
// "Wear a coat" if the temperature is below 15°C.
// "Wear a jacket" if the temperature is between 15°C and 25°C.
// "Wear light clothing" if the temperature is above 25°C.
// Write a program that provides clothing suggestions for different temperatures.

