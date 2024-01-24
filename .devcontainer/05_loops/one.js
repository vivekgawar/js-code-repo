//for

for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element);
}

// nested for loop 
for (let index = 0; index < 10; index++) {
    console.log(`Outer loop: ${index}`);
    for (let j = 0; j < 10; j++) {
        console.log((`Inner loop: ${j}`));
    }
}

// looping through elements in an array
let myArray = ['batman', 'superman', 'spiderman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log('detected 5');
        break;
    }
    console.log(index);   
}

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log('detected 5');
        break;
    }


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        continue; //skips i = 5
    }
    console.log(index);}
}