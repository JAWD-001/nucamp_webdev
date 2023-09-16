let i = 0;
do {
  console.log("The do block will run even if i is falsey");
} while (i);

//global scope

let x = 5;
for (let i = 3; i <= 3; i++) {
  x = x * i;
  console.log(x);
}

const arr = ["john", "julie", "jeremy"];

arr.pop();
console.log(arr);

arr.push("james");
console.log(arr);

console.log(arr.includes("Chris"));

console.log(arr.indexOf("james"));

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const newNums = num1.concat(num2);

const nums = [1, 2, 3, 4, 5];
const numNums = nums.slice(0, 3);
console.log(nums);
const numNums2 = nums.splice(1, 4);
console.log(numNums);
console.log(numNums2);
console.log(nums);
