// The difference between forEach and Map
// forEach
let number = [1, 2, 3, 4]

// Return Method
console.log(number.forEach(element => element * element))// undefined 

// Mutability
// it multitate the original array when assign element by 2 and assign it back to the original array
const newNumber = number.forEach((element, index, array) =>
  array[index] = element * element
)
console.log(number) // output [1,4,9,16]

//can not chain with other methods
const newArrayForEach = number.forEach(element => element * element).filter(x => x > 9) // Cannot read property 'filter' of undefined
console.log(newArrayForEach)

//Map
let numbers = [1, 2, 3, 4]

// Return Method
console.log(numbers.map(element => element * element)) //return new array [1, 4,9, 16]

// Mutability, it does not change the original array
const newArrayMap = numbers.map(element => element * element)

console.log(newArrayMap) // output [1,4,9,16]
console.log(numbers) // output [1,2,3,4]


//Ability to chain with other methods, etc filter(), reduce(), sort()
const newNumbers = numbers.map(element => element * element).filter(numbers => numbers > 3)
console.log(newNumbers) // output [4,9,16]