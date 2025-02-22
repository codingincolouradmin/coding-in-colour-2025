// commonJS imports

// const math = require('./jan15-module.js')


// console.log(math.add(2,3))
// console.log(math.subtract(3,3))
// console.log(math.name)


/**
 * 
 * ESM imports
 * 
 */


import defaultCanBeRenamed ,{ namedFunction,namedFunction2,anotherNamedFunction } from './jan15-module.js'
import { add , multiply } from './jan15-module.js'

defaultCanBeRenamed()
namedFunction()
namedFunction2()

anotherNamedFunction()
console.log(add(5,5))
console.log(multiply(5,5))