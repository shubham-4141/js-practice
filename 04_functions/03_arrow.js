const user = {
    username: "shubham",
    price:999,

    welcomeMassage: function(){// this refer corrent context
           console.log(`${this.username} , welcome to website`);
           console.log(this)
    }

}

// user.welcomeMassage()
// user.username = "ram"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "shubham"
//     console.log(this.username);
// }

// chai()
 
// const chai = function(){
//     let username = "shubham"
//     console.log(this.username);
    
// }
const chai = () => {
    let username = "shubham"
    console.log(this); // it gives {}
    
}

// chai()

// const addTwo = (num1, num2 ) => {
//     return num1 + num2  // basic arrow function
// }

// implicit return

// const addTwo = (num1,num2) => num1 + num2


// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"shubham"})

console.log(addTwo(3,4));

// const myArray = [2, 3, 8, 4, 8]

// myArray.forEach(() => {})