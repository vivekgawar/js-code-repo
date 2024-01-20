// 'this' keyword
const user = {
    username: "Vivek",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); //returns {} (empty object)

// const chai = function(){
//     let username = "vivek"
//     console.log(this.username); //undefined
// }

// chai()

//making an arrow function

const chai = () => {
    let username = "vivek"
    console.log(this.username); //undefined
}
chai()
//using arrow functions
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(4,3))
//using arrow functions in single line
const anotherAdd = (num1, num2) => num1 + num2
console.log(anotherAdd(4,3))