//Arrays are exactly like python list
//start with let/const variable name = [] to generate an empty array
//can constain different primitive data types, but not practical to do so

let bookArray = [1, 2, 3, "batman"];

//arrays are zero indexed so to access an item in an array, you call it as such
bookArray[2];

//array methods
//.length returns the length of an array

newArray = [1, 2, 3, 4];
newArray.length;

//can access the last item of an array by subtracting 1, the index length
newArray[newArray.length - 1];

//.pop() removes an item from an array and .push() adds an item to the end of an array
newArray.pop();
// newArray = [1,2,3]
newArray.push(4);
// newArray = [1,2,3,4]

//.shit() and .unshift() are the same as .pop and .push but for the beginning on an array

newArray.shift();
//newArray = [2,3,4]

newArray.unshift(1);
//newArray = [1,2,3,4]

//.join() takes all items in an array and returns a string, has an optional arguement that takes an string that will seperate all items in an array comma is default
newArray.join();
// newArray = '1,2,3,4'
newArray.join("-");
// newArray = '1-2-3-4'

//.includes() used to check if an item exists in an array, returns boolean
newArray.includes(1);
// true will be returned

//.indexOf() also checks if an item is in an array, but returns the index value of that item, if not then -1 will be returned
let itemIndex = newArray.indexOf(1);
// 0 will be returned

let itemIndex = newArray.indexOf(5);
// -1 will be returned
