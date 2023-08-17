//function review

function sayHello(userName) {
  console.log(`Hello, ${userName}!`);
}
sayHello("John");

function getPizza(size, nToppings) {
  let cost = 10;
  if (size === "medium") {
    cost += 4;
  } else if (size === "large") {
    cost += 8;
  }
  cost += nToppings;
  return cost;
}

let pizzaSize = "large";
let numToppings = 2;
let cost = getPizza(pizzaSize, numToppings);
console.log(`The cost is: ${cost}`);

//arrow functions added to JS in ES6, more concise and don't have a this binding

const adder = (a, b) => a + b;
console.log(adder(1, 2));

//to use multiline function body, we must use curly braces and return statement.
const adder2 = (a, b) => {
  const c = a + b;
  return c;
};
console.log(adder2(2, 3));

//if single parameter, then can omit parathesis
const double = (a) => a * 2;
console.log(double(2));


const convertToF = (c) => (c * 9/5) + 32;