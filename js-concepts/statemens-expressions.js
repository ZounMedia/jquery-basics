// Understanding the Difference Between Statements and Expressions in JavaScript
/** In JavaScript, statements and expressions are two fundamental concepts that define how code is structured and executed.
 * Statements: Instructions that perform actions. They do not return values and are often used to control the flow of the program.
 * Expressions: Code that produces a value. Expressions can be used wherever a value is expected.
 */

// 1. Simple Expression
//An expression is any valid piece of code that evaluates to a value. This value could be a number, string, boolean, etc.

// Expression example
let x = 5 + 10;

// Explanation:
// The part "5 + 10" is an expression that evaluates to 15.
// This value is then assigned to the letiable 'x'.

// 2. Expression in a Function Return
//A function can return an expression, which will be evaluated to produce the return value.

function add(a, b) {
  return a + b; // "a + b" is an expression
}

let result = add(3, 4);

// Explanation:
// "a + b" is an expression that evaluates to 7 when the function is called with arguments 3 and 4.
// The result is then assigned to 'result'.

// 3. Statements that Control Flow
//Statements often control the flow of the program, like conditionals (if, else) or loops (for, while).
let num = 10;

if (num > 5) {
  console.log("Number is greater than 5"); // This is a statement
} else {
  console.log("Number is 5 or less"); // This is also a statement
}

// Explanation:
// The "if" and "else" are control flow statements that dictate what code runs depending on the condition.
// The console.log() calls are also statements that perform an action (logging to the console).

// 4. Statements that Control Flow
//You can use expressions within statements. For example, an assignment statement can include a complex expression.
let a = 5;
let b = 10;
let c = (a + b) * 2; // "(a + b) * 2" is an expression

console.log(c); // Output: 30

// Explanation:
// "(a + b) * 2" is an expression that evaluates to 30.
// The assignment to 'c' is a statement that uses this expression.

// 5. Functions as Expressions
//In JavaScript, functions themselves can be expressions when they are defined as part of an assignment or passed as an argument.
let multiply = function (a, b) {
  return a * b;
}; // This is a function expression

let res = multiply(4, 5); // Using the function expression

console.log(res); // Output: 20

// Explanation:
// The function assigned to 'multiply' is a function expression because it's defined as part of an assignment.
// It produces a function object, which can then be used to perform operations like multiplication.

//Summary
/**
 * Expressions are any valid units of code that resolve to a value.
 * Statements are instructions that perform actions and do not necessarily produce values.
 */
