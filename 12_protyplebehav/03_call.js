function SetUsername(username){
    // complex DB calls
    this.username =username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username) // .call explicitly call that method // here this hold the refreance of above this  
                     
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@gmail.com","123")
console.log(chai);
