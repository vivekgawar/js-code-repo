class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username) //gets parent username
        this.email = email
    }
    addCourse(){
        console.log(`New course has been added by ${this.username}!`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com")
chai.addCourse();