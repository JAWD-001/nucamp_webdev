//types of scope
// let and const have block scope, which means they only have value in the block of code they were declared in and it's child blocks, this is if, do, do...while, while, and for loops.

if (true) {
  testVar = 1;
  if (testVar > 1) {
    testVar++;
  }
}

//testVar is available in the if statement and the child if statement, but is undeclared outside of if statement.

//function scope is similar to block scope, but only available to the function. made using var.
