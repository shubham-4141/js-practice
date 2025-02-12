class User{
     constructor(username){
        this.username = username

     }
     logMe(){
        console.log(`Username:${this.username}`);
        
     }
    static createId(){  
        return`123`
     }
}
const shubham = new User("shubham")
// console.log(shubham.createId());

class Teacher extends User {
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","phone@gmail.com")
iphone.logMe()
iphone.createId() // is not work because of static keyword
