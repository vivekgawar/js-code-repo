// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);    
}

const greetings = "hello"
for (const character of greetings) {
    console.log(character);
}

// Maps ==> Only unique values, remembers the order in which values are entered
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
}