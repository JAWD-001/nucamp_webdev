/* syntax conventions */
/* user camelCase, typically not snake_case (python), or SCREAMING_SNAKE_CASE (python settings.py variables and JS hardcoded variables for program execution that are not meant to be changed). It doesn't matter for interpreter, but conventions make it easier to read code. 
Use 2 or 4 spaces on indents, depends on team, but stay consistent. I use four (cause of python background), but I have read that two is the convention. */

/* declaring variables */
var name = "John Doe";
let age = 30;
const pi = 3.14;

/*declaring and instantiating variables */
var message = "Hello world!";
console.log(message);

let data = "Hello";
console.log(typeof data);

data = 15;
console.log(typeof data);

/* string literals */
let dwarf1Name = "Grumpy";
let dwarf2Name = "Sleepy";

let dwarfs = `The dwarfs we declared are ${dwarf1Name} and ${dwarf2Name}!`;

/* common operators */
'a' * 'b'
/* returns NaN, which means Not a Number */

'3' + 4
/* type cohersion will add the numbers */

'string' += 'string'
/* concantinates strings */

/* arithmetic operators*/
2 - 4
3 * 8
3 / 8
3 % 8 

let num = 1

/* increments, changes value of variable */
num++ 
/* postfix, returns num first, then increments behind the scenes */
++num
/* prefix, increments first then returns num to client */

/* decrements, changes value of variable */
num--
--num

/* assignment operators */
let a = 'adfd';
let b = 'adfabd';

a += b;

let x = 3;
4 -= 2;
4 *= 3;
7 /= 2;

