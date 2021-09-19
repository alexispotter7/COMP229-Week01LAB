// Imports the functions halfOf from the lib.js module
// import doSomething from './lib.js';

// console.log("halfOf: " + halfOf(84) );
// console.log("multiply:" + multiply(84, 2) );

// doSomething();

import { flag, touch } from './validator.js';
console.log(flag); //flag is false
touch(); //flag is changed to true
console.log(flag); //flag is true
flag = false; //try to change to false
console.log(flag); //causes an error