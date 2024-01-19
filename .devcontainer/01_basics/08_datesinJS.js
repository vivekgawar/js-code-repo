// Dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// Creating a date
let myCreatedDate = new Date(2023, 0, 5, 5, 3, 4) //Year Month Date Hour Minute Seconds
//or 
let myCreatedDate2 = new Date("2023-01-14")
//or 
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());

// Creating a timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp); // milliseconds value from 1st January 1970
console.log(myCreatedDate.getTime()); // ms value from that day
console.log(Math.floor(Date.now()/1000)) // value in seconds 

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

//customizing toLocaleString function:
const arr = newDate.toLocaleString('default',{
    weekday: "short" // Friday => Fri
})
console.log(arr);