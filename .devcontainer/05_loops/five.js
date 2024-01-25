// Higher order function
const coding = ["ruby", "c++", "python", "js"]

coding.forEach( function (item){
    console.log(item);
})

coding.forEach( (value) => {
    console.log(value);
})


const myCoding = [
    {
        fileLanguage: "JavaScript",
        fileLanguageName: "js"
    },
    {
        fileLanguage: "Java",
        fileLanguageName: "js"
    },
    {
        fileLanguage: "Python",
        fileLanguageName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.fileLanguage);
})