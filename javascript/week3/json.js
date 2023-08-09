//JSON objects help transfer objects.

//syntax is based on objects and arrays
//objects are name/value pairs
//arrays are ordered lists of values

//JSON Objects are objects json arrays are arrays...
//json objects
let person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Halstead Ave",
    city: "Palm Bay",
    state: "FL",
  },
};

//json array
let JSONarray = ["kickflip", "heelflip", "treflip"];

//biggest difference betweem json and js syntax is that object attributes mult be double-quoted and no comments allowed
//can use JSON.stringify() method to convert to json
let data = {
  name: "John Doe",
  age: 30,
};

let jsonData = JSON.stringify(data);
console.log(jsonData);

//can use JSON.parse() to convert json to js
let dataParse = JSON.parse(jsonData);
console.log(dataParse);
