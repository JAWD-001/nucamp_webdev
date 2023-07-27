/* declare functions by specifically calling function before the functionName(paramenter, list)*/

/* function call by functionName(parameter, list); or through an eventListener like .onClick() */
let name = prompt("Hey there, what's your name?!");

function sayHello(name) {
  alert(`Well, hello ${name}! It's nice to meet you.`);
}

/* important note that all variables in a function are local and are therefore deleted when the function ends. If no value is returned, then the value of undefined is returned */

function getArea(width, length) {
  return width * length;
}

let area = getArea(3, 4);

alert(area);
