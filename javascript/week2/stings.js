//strings are similar to arrays in that they can have index accessed and also .length will give the length of a string, but they have own methods

//.indexOf()
let myStr = "asdfghjkl";
myStr.indexOf("k");

//includes() returns true if the string contains one or more characters
myStr.includes("asrow"); //true

//slice() also works for strings to copy part of string (beginning, and character to end before) or (index to begin at to copy to end)
myStr.slice(2, 5);
myStr.slice(3);

//toUppercase and toLowerCase force strings to be all uppercase or lowercse
myStr.toUpperCase();
myStr.toLowerCase();

//.split() converts a string to an array, providing an argument as a seperator(determines where to place comma)
const newStr = "Florida Texas Georgia";
newStr.split("");
//['Florida', 'Texas', 'Georgia']
