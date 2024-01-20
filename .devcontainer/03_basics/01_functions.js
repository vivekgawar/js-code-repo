function sayMyName(){
    console.log("Hi");
}

//sayMyName //function reference
sayMyName() //function execution

function addTwoNumbers(num1, num2){ //parameters
    console.log(num1 + num2);
}

addTwoNumbers(3, 5) //arguments

const result = addTwoNumbers(3, 5)
console.log("Result: ", result); //writing code like this wont return result
//it will output in 'undefined' because consoling to log and return are two different things

function addTwoNumbers2(num1, num2){ //parameters
    let result = num1 + num2
    return result
    console.log(num1 + num2);//won't execute because written after return
}

console.log(addTwoNumbers2(5, 7))
//when arguments are not passed, undefined will take the position of the parameters

//how to work with multiple inputs if you arent aware how many there will be
function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(200, 220, 240)) //will print only first value
function calculateCartPriceNew(...num1) {
    return num1
}
console.log(calculateCartPriceNew(200, 220, 240)); //works correctly with REST operator
