const coding = ["ruby", "c++", "python", "js"]

// if we store the values above using forEach and return it, it will give undefined in 
// console log

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
const newNum = myNums.filter( (value) => value > 4)
console.log(newNum);

const newNums = myNums.filter( (value) => {
    return value > 4} //you must add return keyword if you start {} scope
    )
console.log(newNums);