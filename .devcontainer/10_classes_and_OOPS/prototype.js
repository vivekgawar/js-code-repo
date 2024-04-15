let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor: 'hammer',
    spiderman: 'web',
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}
// here we can do heroPower.prototype.hitesh as well but here's a trick
// since all array and string and functions go through object
// why not tweak the Object?
Object.prototype.hitesh = function(){
    console.log('Hitesh is present in all Objects');
}
heroPower.hitesh()
myHeros.hitesh()

// Inheritance
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport  //This will give TASupport the property
    // of teaching support 
}

const user = {
    username: 'Chai',
    email: 'chai@google.com'
}

Teacher.__proto__ = user

// Modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport, Teacher) 
// teaching support gets property of teacher

let anotherUsername = 'ChaiAurCode  '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()