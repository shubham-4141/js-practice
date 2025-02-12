class User{
    constructor(email,password){
           this.email = email
           this.password =password
    }
    get email(){
            return this._email.toUpperCase() // without _(underscore ) get set faced race condition  
    }
    set email(value){
            this._email = value
    }

    get password(){
        return `${this._password}shubham` // it can show user side 
    }
    set password (value){
        this._password = value // ye password system me save hoga 
    }
}
const shubham =new User("shubh@gmail.com","123abc")
console.log(shubham.password);
console.log(shubham.email);
