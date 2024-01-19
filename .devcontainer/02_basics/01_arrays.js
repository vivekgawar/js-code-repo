//Declaring array  

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(0, 1, 2, 3, 4, 5)
console.log(myArr[2]);

//Array methods
myArr.push(6) //adds element at the end of array
myArr.pop() //removes element from the end of array

myArr.unshift(9) //adds element at first position
myArr.shift() //removes element from first position
console.log(myArr);

const newArr = myArr.join() //results in a string separated by comma
console.log(newArr);

//Slice and Splice methods\
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)//does not include the last range nor manipulates original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)//includes the last range and cuts actual array
console.log("C ", myArr);
console.log(myn2);