// Code Challenges //

// Challenge 1 //
let a = 0;
let b = 1;
let count = 0;

function fiboUntilMax(n) {
  while (count < n) {
    console.log(`n = ${a}`);
    let temp = a + b;
    a = b;
    b = temp;
    console.log(`Count is: ${count++}`);
  }
}

// Challenge 2 //
function fiboEvenNum(n) {
  let nums = fiboArray(n);
  const evenFiboNum = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      evenFiboNum.push(num);
      console.log(evenFiboNum);
    }
  }
}

// Challenge 3 //
function fiboTotal(n) {
  const fiboNums = fiboArray(n);
  const fiboSum = 0;
  console.log(fiboSum);
  for (number of fiboNums) {
    fibroSum += number;
  }
  console.log(fibroSum);
}

//Challenge 4//
function isFiboNum(f, n) {
  if (fiboArray(n).includes(f)) {
    return `${f} is a Fibonacci number`;
  } else {
    return `Sorry, ${f} is not a Fibonacci number`;
  }
}

//fibonacci function//
function fiboArray(n) {
  let a = 0;
  let b = 1;
  const fiboNum = [];
  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    fiboNum.push(a);
  }
  return fiboNum;
}

fiboTotal(10);
fiboEvenNum(6);
isFiboNum(2, 10);
isFiboNum(6, 10);
