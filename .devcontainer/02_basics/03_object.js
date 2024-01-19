// singleton
//Object.create => also called constructor method
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vivek",
    age: 20,
    [mySym]: "mykey1",
    email: "vivek@google.com",
    isLoggedIn: false
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);

JsUser.email = "vivek@chatgpt.com"
// Object.freeze(JsUser) // no further changes will happen
JsUser.email = "vivek@microsoft.com"
console.log(JsUser.email)

// adding a function in Object
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`); //this refers to the current object
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());