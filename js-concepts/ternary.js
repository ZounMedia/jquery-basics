//Understanding Ternary Operator in JavaScript

/**The ternary operator in JavaScript is a concise way to perform a conditional (if-else) operation. It’s called "ternary" because it takes three operands:
 * Condition: The expression to be evaluated as true or false.
 * Expression if True: The value or expression to return if the condition is true.
 * Expression if False: The value or expression to return if the condition is false.
 * Basic syntax is: condition ? expressionIfTrue : expressionIfFalse;
 */

//1. Simple Ternary Example
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // Output: "Yes"

// Explanation:
// The condition "age >= 18" is checked.
// If it's true, the expression "Yes" is returned, otherwise "No" is returned.

//2. Ternary in a Function Return
function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10)); // Output: "Even"
console.log(checkEvenOdd(7)); // Output: "Odd"

// Explanation:
// The condition "number % 2 === 0" checks if the number is even.
// If true, "Even" is returned; if false, "Odd" is returned.

//3. Ternary for letiable Assignment
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

console.log(grade); // Output: "B"

// Explanation:
// The first condition "score >= 90" is checked.
// If true, "A" is assigned; otherwise, the second condition "score >= 80" is checked.
// If true, "B" is assigned; if false, "C" is assigned.

//4. Chained Ternary Operators
//Though not always recommended for readability, ternary operators can be chained together to handle multiple conditions.
let score2 = 72;
let performance =
  score2 >= 90
    ? "Excellent"
    : score2 >= 75
    ? "Good"
    : score2 >= 50
    ? "Average"
    : "Poor";

console.log(performance); // Output: "Average"

// Explanation:
// The condition "score2 >= 90" is checked first.
// If true, "Excellent" is assigned; if false, "score2 >= 75" is checked.
// If true, "Good" is assigned; if false, "score2 >= 50" is checked.
// If true, "Average" is assigned; if all conditions are false, "Poor" is assigned.

/**Summary
 * Ternary Operator: A concise way to perform conditional operations, returning one value if a condition is true and another if it is false.
 * Syntax: condition ? expressionIfTrue : expressionIfFalse;
 * They can be chained for multiple conditions but should be used carefully to maintain code readability.
 */
