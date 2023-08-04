//the math object is a built-in global object that can be used to access certain math-related functions.
//Math.random() generates a random number between 0 and 1, 0 could be a number but not 1.
//to generate a number higher than 1 you must multiply by a number greater than 1
randomNum = Math.random() * 6;

//Math.floor() removes all numbers to the right of a decimal point.

randomNum = Math.floor(Math.random() * 6);
