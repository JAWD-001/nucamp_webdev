function getName() {
  const userName = prompt("What's your name?");
  sayHello(userName);
}

function sayHello(userName) {
  alert(`Hello, ${userName}!`);
  console.log("Alert sent!");
}
