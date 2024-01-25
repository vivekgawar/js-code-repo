//Map function
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (nums) => nums + 10)
console.log(newNums);

// chaining (applying map and filter again and again)
const newNumeros = myNumers
                   .map( (num) => num * 10)
                   .map( (num) => num + 1)
                   .filter( (num) => num>=40)

console.log(newNumeros)