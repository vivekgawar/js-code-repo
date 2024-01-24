const userEmail = "vivek@ai.com" //================>true

if (userEmail){
    console.log("Got user Email!");
}
else{
    console.log("Email not found!")
}
// =======================================================================================
const userEmail2 = "" //=================>false

if (userEmail2){
    console.log("Got user Email!");
}
else{
    console.log("Email not found!")
}

// #################VALUES WHICH ARE CONSIDERED TRUTHY AND FALSY#######################

// Falsy Values:
// 0, -0, BigInt 0n, "", null, Undefined, NaN

// Truthy Values:
// "0", "false", " ", [], {}, function(){}


// Nullish coalescing operator (??)

let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 10
console.log(val1);
console.log(val2);
console.log(val3);

// Terniary Operator (?)

// condition ? true : false
const iceTeaPrice = 80
iceTeaPrice>=80 ? console.log("Price >=80") : console.log("Price < 80");