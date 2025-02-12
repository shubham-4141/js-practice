// fetch('https://somthinng.com').then().catch().finally() // bad me padenge

// phle promise bnana sikhe 

const promiseOne = new Promise(function(resolve,reject){
    // Do asyn task
    // DB calls ,cryptography ,network
    setTimeout(function(){
        console.log('Async task is compelete ')
        resolve() // ye fuction ko connect krne ke liye jarroori hota hai
    },1000)

})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task two")
        resolve()
    }, 1000);
}).then(function(){
    console.log('async 2 compelete')
})

// data consumption kaise karte hai
const promiseThree =new Promise(function ( resolve,reject){
    setTimeout(function () {
          resolve({username:"shubham",email:"shubhamkumar818845@gmail.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
       setTimeout(() => {
        let error = false
        if(!error ){
            resolve({username:"shubham",password:"123"})
        }else{
            reject('ERROR:somthing Went wrong')
        }
          
       }, 1000);
})
promiseFour
.then((user) => {
      console.log(user)
      return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected ")
})

const promiseFive = new Promise(function(resolve,reject){

    setTimeout(() => {
        let error = true
        if(!error ){
            resolve({username:"javasript",password:"123"})
        }else{
            reject('ERROR:js Went wrong')
        }
          
       }, 1000);

})
// dusri tarh se krna (dusri trh se accept krna )
// chahe try catch async vala use kre chahe .then catch finally vala kre kaam dono same krte hai  
async function consumePromiseFive() {
  try {
    const response =  await promiseFive
    console.log(response);
    
    
  } catch (error) {
    console.log(error)
  }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data= await/* bina await ke code run krega pr koi value nhi dega  */ response.json()
//         console.log(data);
    
        
//     } catch (error) {
//         console.log("Erorr:",error);
        
//     }
    
// }
//getAllUsers()

// uper vala kaam with .then .catch

 fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
 })
 .then((data)=>{
     console.log(data)
 })
 .catch((error)=>{
    console.log((error))
 })

 // fetch make a special queue for events because it runs first so output come on top  show better after run code 

