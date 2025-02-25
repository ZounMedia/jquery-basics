// Understnading Scope in JavaScript

/**
 * In JavaScript, scope determines the accessibility (visibility) of variables and functions. It defines where variables and functions can be used in your code.
 * Understanding scope is crucial because it helps prevent variable conflicts and keeps your code organized.
 */

// 1. Global Scope
/*
Global scope means that a variable or function is accessible from anywhere in the code. 
If you declare a variable outside any function or block, it's in the global scope.
 */

// Example
let globalVar = "I'm a global variable";

function showGlobalVar() {
  console.log("globalVar log in function: ", globalVar); // Accessible here
}

showGlobalVar(); // Output: "I'm a global variable"

// console.log("globalVar log called in the global scope: ", globalVar); // Accessible here too

//Explanation: globalVar is declared outside any function, so it's globally scoped and accessible from anywhere in the code.

// 2. Function Scope
/*Variables declared inside a function are in function scope and can only be accessed within that function. */

//Example
function showLocalVar() {
  // let globalVar = "I'm not really a global var, I'm local to showLocalVar";
  let localVar = "I'm a local variable";
  console.log("localVar called with function:", localVar); // Accessible here
  // console.log("globalVar called with function:", globalVar); // The JS engine will look up the scope chain until it finds the variable or errors out
}

// showLocalVar(); // Output: "I'm a local variable"

// console.log(localVar); // Error: localVar is not defined

/**
 * Explanation: localVar is declared inside the showLocalVar function, so it is only accessible within that function. Trying to access it outside results in an error.

 */

// 3.  Block Scope with let and const
/**In ES6 (ECMAScript 2015), let and const introduced block scope, which means variables are only accessible within the block they are defined in, like within {} braces. */

//Example
function checkBlockScope() {
  let functionScopeVar = "I'm within the function scope";
  if (true) {
    let blockScopedVar = "I'm block scoped";
    console.log(blockScopedVar); // Accessible here
  }

  console.log(functionScopeVar); // I'm within the function scope
  console.log(blockScopedVar); // Error: blockScopedVar is not defined
}

// checkBlockScope();

/** Explanation: blockScopedVar is declared inside an if block using let, so it's only accessible within that block. Trying to access it outside the block causes an error. */
