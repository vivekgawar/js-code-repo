const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superrman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);// will give array inside the array

const all_heroes = marvel_heroes.concat(dc_heroes)//merges together correctly
console.log(all_heroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes); //works same as concat

const another_array = [1 , 2, [2, 6, 23, [5, 74, 24, 222]]]
const real_another_array = another_array.flat(Infinity) //solves array into array problem
console.log(real_another_array);

console.log(Array.isArray("Vivek")) //returns false because its a string
console.log(Array.from("Vivek")); //will make it an array separated by letters
console.log(Array.from({name: "Vivek"})); //empty string bc we didnt specify to make array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));