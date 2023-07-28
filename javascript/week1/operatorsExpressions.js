/* operators are characters that operate on one or more variables.
unary operators only work on one operand
binary operators work on two operands
ternary operators work on 3 operands */

/* equality operators */

/* strict equality and identity 
same value and same data type*/
8 === "8"; //false
null === undefined; //false

/* loose identity and equality 
same value, not same data type but performs type coercion*/
8 == "8"; //true
null == undefined; //true

/* strict inequality and nonidentity */
8 !== "8"; //false
8 !== 9; //true

/* loose inequaity and nonidentity
same number, not same */
8 != "8"; //false
8 != 9; //true

/* conditional operators determine condtional statements between two or more variables. 
> < >= <= */

/* logical operators perform logic in code to determine computational actions */

/* && - logical and (binary) */

/* logical or || */

/* ! - logical not (uniary)*/

let age = 25;
let ticketFee = undefined;

if (age <= 12 || age > 65) {
  ticketFee = 10;
} else {
  ticketFee = 20;
}

let playInstrument = false;
let canSing = true;
let joinBand = undefined;

if (canSing === true || playInstrument === true) {
  joinBand = true;
} else {
  joinBand = false;
}

/* !! not not operator easily converts to boolean */
