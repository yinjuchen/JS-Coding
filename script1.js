// Implement a function functionLength, to return the number of parameters a function expects. Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by arguments.length)

// function foo() { }
// function bar(a) { }
// function baz(a, b) { }

// functionLength(foo); // 0
// functionLength(bar); // 1
// functionLength(baz); // 2

export default function functionLength(fn) {
  return fn.length
}

function foo(...args) { }
function bar(a, b = 1) { }
function baz(a = 1, b = 2) { }

// Output: 0 (no explicitly declared parameters)
//foo uses the rest parameter syntax ...args to store numbers of arguments in an array
// although foo received the rest parameter, the lengh is always 0 because rest parameters are not considered when calculating the length 
console.log(functionLength(foo)) 

// Output: 1 (1 explicitly declared parameters)
// bar length returns 1 becuase a isthe only explicitly declared parameter excluding those with default value(b = 2)
console.log(functionLength(bar))  

// Output: 0 (2 explicitly declared parameters)
// baz have default values for a =1, b=2, so there are no explicitly declared parameters in the function definition.
console.log(functionLength(baz)) 