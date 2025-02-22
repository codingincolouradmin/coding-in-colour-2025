// function add(a,b) {
//     return a + b
// }

// function multiply(a,b) {
//     return a * b
// }

// 1
// module.exports.add = add
// module.exports.mul = multiply

// 2
// exports.add = add
// exports.multiply = multiply

// 3
// module.exports = {
//     add     
//     multiply,
// }

/**
 * 
 */

// function add(a,b) {
//     return a + b
// }


// module.exports.add =  (a, b) => a + b
// module.exports.subtract = (a, b) => a - b;
// module.exports.name = "my name"

/**
 * 
 * ESM modules
 */

// 1
export const add = (a, b) => a + b; 
export const multiply = (a, b) => a * b;

// 2
const defaultFunction = () => {
    console.log("this is a default export")
}

const namedFunction = () => {
    console.log("this is a named export")
}

const namedFunction2= () => {
    console.log("this is  named export 2")
}

// 3
function anotherNamedFunction() {
    console.log("this is  named export 3")
}

export default defaultFunction
export {namedFunction,namedFunction2,anotherNamedFunction}