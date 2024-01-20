// IIFE => Immediately Invoked Function Expressions 
// IIFE is used to prevent the problem caused by pollution of global scope

(function chai(){
    console.log("DB CONNECTED");
})();
// the function above is formatted like ()()
// first parantheses are the whole function wrapped up
// second parantheses are the function call
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('vivek')