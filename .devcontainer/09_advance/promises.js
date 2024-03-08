const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed!")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed!");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Vivek", age: 18})
}, 1000)
})
promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; //change it to 'true' to get another value
        if (!error){
            resolve({username: "Vivek", account: "riotGames"})
        }
        else{
            reject("ERROR! Something went wrong :/")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))
// then for resolve
// catch for errors
// finally is default case

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; //change it to 'true' to get another value
        if (!error){
            resolve({username: "Javascript", account: "github"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}