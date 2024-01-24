// if 
if (2 == '2'){
     console.log("executed"); //executed
}
if (2 === '2'){
    console.log("executed"); //wont be executed 
}

//else-if ladder

const balance = 1000
if (balance < 500){
    console.log("balance is less than 500");
}
else if (balance < 700){
    console.log("balance is less than 700");
}
else if (balance < 900){
    console.log("balance is less than 900");
}
else{
    console.log("balance is less than 1000");
}

//and statement in if block

const userWantsPhone = true
const userWantsCover = false
// Use && for and; || for or, we can add these two times && &&
if (userWantsCover || userWantsPhone == true){ 
    console.log("User wants both phone and the cover");
}
