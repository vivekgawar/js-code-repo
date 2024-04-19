const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);


// My Logic
// console.log(Math.ceil(Math.PI));

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true
}
// console.log(Object.getOwnPropertyDescriptor(chai))
// -> will come Undefined because chai is not a property
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))