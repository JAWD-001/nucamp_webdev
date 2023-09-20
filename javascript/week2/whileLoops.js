let i = 0;

while (i < 10) {
  i++;
  console.log(`i is currently: ${i}`);
}

let students = ['james', 'daniella', 'theo', 'henry']

while (students[i] < 10) {
  console.log(`Welcome to class ${students[i]}`);
  i++;
}

do {
  i++;
  console.log(`i is currently: ${i}`);
} while (i < 10);

/* in the while loop, the condition is evaluated first, so it if condition is false then it will never run. However, the do...while loop runs before the condition is evaluated, which allows the code will at least always execute once. */

// practoce
let studentName = undefined;

while ((studentNamename = undefined)) {
  studentNamename = prompt("What is your name?");
}

let a = 0;
let b = 1;
let count = 0;

while (count < 0) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  count++;
}

let n = prompt("What is your number?");
printFibo(n);

function printFibo(n) {
  let a = n;
  let b = 1;
  let count = 0;
  while (count < 10) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
  }
}
