// ES6
class User{
    constructor(username, email, password){
        this.username = username
        this.password = password
        this.email = email      
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User('chai', "chai@fb.com", "vivek123")
console.log(chai.encryptPassword());