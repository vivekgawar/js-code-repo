let score = "33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => Nan => Not a Number
//true => 1; false => 0
//null => 0
//undefined => undefined 

let isLoggedIn = ""
let isLoggedInBoolean = Boolean(isLoggedIn)
console.log(isLoggedInBoolean);

//0 => false; 1 => true
//""=> false; "non empty string"=> true

//*********Operations*********
//2%3 = remainder on division 
// console.log("2" == 2) => true because of datatype conversions
// console.log("2" === 2) => false because === checks value as well as datatype
// to make a number bigInt add n in the end eg: 28091041210792n


const Id = Symbol('123')
const Id2 = Symbol('123')
console.log(Id === Id2);