const accountId = 15444
let accountEmail = "shubhamkumar@gmail.com"
var accountPassward ="12345"
accountCity="Barabanki" //ese bhi memory reserve kr sakte hai but ye axa tarika nhi hai
let accountState;

//accountId=2//not allowed conts keyword donot overwrite 

console.log(accountId);

accountEmail="sh@gmail.com"
accountPassward="122334"
accountCity="lucknow"

console.table([accountId ,accountEmail,accountPassward,accountCity,accountState]);

/* 
prefer not to use var 
becuase of issue of block scope and functional scope
*/