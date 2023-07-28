/* if, else if, else compares if a condition is truthy or falsey*/

let dogSits = true;

let dogGetsTreat;

if (dogSits === true) {
  dogGetsTreat = true;
} else {
  dogGetsTreat = alert("You must sit to get a treat!");
}

let roll = 1;

if (roll === 1 || roll === 6) {
  console.log("You win!");
} else if (roll <= 3) {
  console.log("Roll again!");
}

/* switch statements executes code based on different values in the statement */
function testSwitch(size) {
  switch (size) {
    case "small":
      alert("Chair is too small!");
      break;
    case "medium":
      alert("Chair is just right");
      break;
    case "large":
      alert("Chair is too big");
      break;
    default:
      alert("Chair is an unknown size");
      break;
  }
}

testSwitch("small");
testSwitch("medium");
testSwitch("blah");

function testSwitch2(size) {
  switch (size) {
    case "small":
      alert("Chair is too small!");
      break;
    case "medium":
      alert("Chair is just right");
      break;
    case "large":
    case "extra-large":
      alert("Chair is too big");
      break;
    default:
      alert("Chair is an unknown size");
      break;
  }
}

testSwitch("large");
/* code will run large and extra large and give same alert. keeps code DRY */

let n = "2";

switch (n) {
  case 1:
    console.log("The number is 1");
    break;
  case 2:
    console.log("The number is 2");
    break;
  case 3:
    console.log("The number is 3");
    break;
  case 4:
    console.log("The number is 4");
    break;
  default:
    console.log("The number is not 1-4");
}

/* will return default condition because '2' is not 2 and switch statements require strict comparison */
