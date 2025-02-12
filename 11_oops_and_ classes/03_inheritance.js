class User{
    constructor(username){
        this.username = username
    }

    logMe(){
         console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username ,email ,password){
            super(username) 
            this.email = email
            this.password =password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai =  new Teacher("shubham","shubh@gmail.com","123")

chai.addCourses();
chai.logMe()

const masalaChai = new User("masalachai")
// masalaChai.addCourses() // not defined scope

masalaChai.logMe()

// console.log(chai === masalaChai);// false 
// console.log(chai === Teacher);// false 

console.log(chai instanceof User);
console.log(chai instanceof Teacher );

  