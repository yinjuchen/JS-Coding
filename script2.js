// Make Counter
//Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

// set initialValue to 0 
export default function makeCounter(initialValue = 0) {
  // use let to increase number 
  // let count = initialValue -1
  let count = initialValue

  // retrive count value using clousure 
  return () => {
    // count = count + 1
    // return count
    // use postpix and returns the value before or after the increment
    return count++

  }
}
// Creating a counter starting from 0
const countFromZero = makeCounter()

console.log(countFromZero()) // output 0
console.log(countFromZero()) // output 1
console.log(countFromZero()) //output 2

// Creating a counter starting from 5
const countFomFive = makeCounter(5)
console.log(countFomFive()) // output 0
console.log(countFomFive()) // output 1
console.log(countFomFive()) //output 2
