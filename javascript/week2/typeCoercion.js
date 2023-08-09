//implicit is when we allow the JS engine to coerce values to another, this is considered bad practice, so just don't do it.

//explicit is when you directly convert values to another data type.
let str = "5";
let num = Number(str) + 3;

//Number(variable) will change a string or boolean to a number
//String(variable) will change a number, boolean, or object to a string
//Boolean(variable) will change a number, string, object to true and the NaN, 0, '', null, undefined, and False to a false boolean value.
