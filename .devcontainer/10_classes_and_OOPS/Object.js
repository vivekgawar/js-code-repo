function multiplyby5(num){
    return num*5
}  

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 250)
// Before calling the function hume batana padega ki new properties inject 
// hui hai, by adding 'new' keyword to line 23 and 24 the prototype
// properties would be injected
chai.printMe()
// new keyword initiates the creation of a new JavaScript object.
// newly created function gets linked to the prototype of constructor function
