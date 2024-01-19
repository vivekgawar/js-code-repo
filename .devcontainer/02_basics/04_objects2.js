const tinderUser = new Object() //=> singleton Object
// const tinderUser = {} => Non singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Vivek"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Vivek",
            lastName: "Gawar"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)//makes {} the target and the other two the source
console.log(obj3);
//or
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// to print keys
console.log(Object.keys(tinderUser));
// to print values
console.log(Object.values(tinderUser));
// to print entries
console.log(Object.entries(tinderUser)); //both key value pair as an array 
// to check if it includes such property/key
console.log(tinderUser.hasOwnProperty("isLoggedIn"));