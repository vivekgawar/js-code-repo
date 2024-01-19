const score = new Number(100)
//Normal 100 as output
console.log(100)
//Specially Type Casted Number so we get properties along with it
console.log(score);
//properties in the question:
console.log(score.toString());
console.log(score.toString().length); //length of the number //3 
console.log(score.toFixed(2)); //upto two decimal spaces //100.00

const otherNumber = 21.898567 // => 21.9
console.log(otherNumber.toPrecision(3)); //returns string, parameters are required precision

//representing numbers in comma format
const hundreds = 10000000
console.log(hundreds.toLocaleString()); //in US Standards
console.log(hundreds.toLocaleString('en-IN')); //in Indian Standards

//+++++++++++++++ Maths Library ++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); //returns magnitude
console.log(Math.floor(5.2));
console.log(Math.ceil(5.2));
console.log(Math.round(5.2));

// random 
console.log(Math.random()); //float values between 0 and 1
console.log(Math.floor(Math.random()*10)+1);
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max - min + 1))+ min); //to get values between max and min