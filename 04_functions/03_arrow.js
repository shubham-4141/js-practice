const user = {
    username: "shubham",
    price:999,

    welcomeMassage: function(){// this refer corrent context
           console.log(`${this.username} , welcome to website`);
           console.log(this)
    }

}

// user.welcomeMassage() // shubham ,welcome to website
// user.username = "ram"
// user.welcomeMassage()

// console.log(this); // ye return krega {}

// function chai(){
//     let username = "shubham"
//     console.log(this.username); // ye fuction ke ander work nhi krta hai keval object ke ander work krta hai  ye (undifined dega)
// }

// chai()
 
// const chai = function(){ // vperval bhi same hai
//     let username = "shubham"
//     console.log(this.username);// undefiend 
    
// }
const chai = () => {
    let username = "shubham"
    console.log(this); // it gives {}
    
}

chai()

// const addTwo = (num1, num2 ) => {
//     return num1 + num2  // basic arrow function
// }

// implicit return

// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"shubham"})
// const addTwo = (num1,num2) => {username:"shubham"} // return undefined

// console.log(addTwo(3,4));

// const myArray = [2, 3, 8, 4, 8]

// myArray.forEach(() => {})