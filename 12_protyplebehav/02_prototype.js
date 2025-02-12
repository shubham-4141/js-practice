// let myName = "shubham   "
// let myChannel = "chai    "

// console.log(myName.truelength);

// create a method for true length

let myHeros = ["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
        
    }
}

Object.prototype.shubham = function(){
    console.log(`shubham is present in all object`)
}

Array.prototype.heyShubham = function(){
    console.log(`shubham says hello`);
    
}

// heroPower.heyShubham() this prototype decleare for only array
// heroPower.shubham()
// myHeros.heyShubham()
// myHeros.shubham()

// inheritance
const User = {
    name:"shubham",
    email:"shubham@google.com"
}

const Teacher = {
    makeVidoes:true
}
const TeachingSupport ={
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS assigment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // outdated

// mordern sytanx

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"shubham".trueLength()
"kumar".trueLength()
