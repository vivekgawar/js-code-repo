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