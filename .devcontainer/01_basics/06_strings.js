const name = "Vivek"
const repoCount = 10
// Below is the outdated way to concatenate strings
// console.log(name + " " + repoCount + " Value")

// Modern way in JS to concatenate strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// declaring a string
const gameName = new String("Crimson-Bully")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

//string slicing
const newString = gameName.substring(0, 4) //only takes positive parameters
const anotherString = gameName.slice(0, -5) //can take negative parameters as well
console.log(newString);
console.log(anotherString);

//removing blank spaces
const newStringOne = "   Vivek   "
console.log(newStringOne);
console.log(newStringOne.trim()) //removes both left and right blank spaces

//replacing characters in string
const newStringTwo = "https//www.friv.cum/"
console.log(newStringTwo.replace('u', 'o')); //replaces u with o

//checking if string has a specific value
console.log(newStringTwo.includes("friv")); //true
console.log(newStringTwo.includes("five")); //false

//split on the basis of characters
console.log(gameName.split('-')); //gives an array of string separated by '='