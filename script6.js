//Implement a function flatten that returns a newly - created array with all sub - array elements concatenated recursively into a single level.

export default function flatten(value) {

  if(Array.isArray(value)) {
    return value.reduce((acc, cur) => acc.concat(flatten(cur)),[])
  } else {
    return [value]
  }
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
