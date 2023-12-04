// Implement a sum function that accepts a number and allows for repeated calling with more numbers. Calling the function without an argument will sum up all the arguments thus far and return the total.

// clousure 
// undefinded !== null

export default function sum(valueA) {
  return function (valueB) {
    return valueB === undefined ? valueA : sum(valueA + valueB)
  }
}

const addTwo = sum(2)
console.log(addTwo()) // 2
console.log(addTwo(1)()) // 3
console.log(addTwo(1)(2)()) // 5
console.log(addTwo(1)(2)(-3)()) // 2


console.log(sum(1)()) // 1
console.log(sum(1)(2)()) // 3
console.log(sum(1)(2)(-3)()) // 0

// One line solution 

const sum2 = (a) => (b) => b === undefined ? a : sum2(a + b)
console.log(sum2(1)())// 1
console.log(sum2(1)(2)()) // 3
console.log(sum2(1)(2)(-3)()) // 0