class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
}
const vivek = new User("V@vivek.ai", "123abc")


console.log(vivek.password, vivek.email);