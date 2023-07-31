/*Code Challenges

//Challenge 1//
let a = 0;
let b = 1;
let count = 0;
let n = 1000;


while (a < n) {
  console.log(`m = ${a}`);
  let temp = a + b;
  a = b;
  b = temp;
  console.log(`Count is: ${count++}`);
}

//Challenge 2//
let a = 0;
let b = 1;
for (let i = 0; i < 5; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  if (a % 2 === 0) {
    console.log(a);
  }
}
*/
let a = 0;
let b = 1;
let fiboSum = 0;
for (let i = 0; i < 5; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  fiboSum += a;
  console.log(fiboSum);
}
