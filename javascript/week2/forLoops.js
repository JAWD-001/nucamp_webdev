/* for loops are similar to while loops, but have built in support with incrementing iterator */
let i = 0;
while (i < 5) {
  console.log(`Loop interation : ${i}`);
  i++;
}

/* same way, but in for loop */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* for (initialization; condition; increment/final expression){
    code to run...;
}
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
  a = 0;
  a++;
  console.log(a);
}

let n = prompt("What is the starting number?");
calFibo(n);

calFibo(5);
function calFibo(n) {
  let a = n;
  let b = n + 1;
  for (let i = 0; i < 5; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

function calFibo(n) {
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
}
