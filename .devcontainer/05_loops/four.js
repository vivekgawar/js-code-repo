const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple' 
}

for (const key in myObject) {
        console.log(`${key} is shortcut for ${myObject[key]}`);            
    }

// if we apply forin in Arrays we will get index values instead of actual values
