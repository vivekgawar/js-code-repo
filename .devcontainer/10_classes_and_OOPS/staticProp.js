class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The Username is ${this.username}`)
    }
    static createId(){
        return '123'
    }
}

const vivek = new User('vivek')
console.log(vivek)
console.log(vivek.createId)