// Question 1: 
// What is a higher-order function, and how can it be used to process an array 
// with a callback function? Provide an example where an array is processed 
// to produce another array of doubled and squared values.

// Higher Order Function
function processArray(arr,callback){
  let result = [];
  for(let i = 0; i < arr.length; i++){
      result.push(callback(arr[i]));

  }
  return result;
}

// Callback Functions
function double(num){
  return num * 2;

}
function square(num){
  return num * num;

}

// Using the higher order function
let numbers1 =[1,2,3,4,5];
console.log(processArray(numbers1, double));
console.log(processArray(numbers1, square));

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
let numbers2 = [1,2,3,4,5];
console.log(filterArray(numbers2,isEven));
console.log(filterArray(numbers2,isGreaterThanThree));


// Question 3: 
// How can you combine the map and filter methods in JavaScript to process 
// and filter an array? Provide an example where an array is tripled and 
// then filtered to include only odd numbers.

// Combining Map and Filter
function procesAndFilterArray(arr,transformCallback, filterCallback){
  let transformed = arr.map(transformCallback);
  console.log(transformed);
  return transformed.filter(filterCallback);

}

// Callback Functions
function triple(num){
  return num * 3;
}
function isOdd(num){
  return num % 2 !== 0;

}

// Using the combined function
let numbers3 = [1,2,3,4,5];
console.log(procesAndFilterArray(numbers3, triple , isOdd));


// Question 4: 
// How can higher-order functions be used to process an array of strings 
// with callback functions? Provide an example where each string in an array 
// is converted to uppercase and appended with an exclamation mark.

// Higher Order Function


// Callback Functions

// Using the higher order function

