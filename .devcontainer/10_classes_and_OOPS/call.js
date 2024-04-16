function setUsername(username){
    this.username = username
    // complex DB calls
    console.log("Called");
}

function setUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new setUser("Chai", "chai@fb.com", 123);
console.log(chai);