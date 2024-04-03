const user = {
    username: 'Hitesh',
    loginCount: 8,
    signedIn: true
}

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = User("Hitesh", 12, true)
console.log(userOne);

// const userTwo = new User("Hitesh", 12, true)
// console.log(userOne); --> use new keyword