// var c= 300 //  var ko hm nhi use krenge kyuki ye scope nhi samjhta axe se

 { }// scope khte hai isko

 let a = 300

 if(true){
    let a = 10
    const b = 20
     var c = 30
    //  console.log("inmner value of a =>", a);
     function addNum(){

     }
     

 }

 

//  console.log(a);
 //console.log(b);
//  console.log(c);// it give 30 value of c in the scope that because we can not use var 


function one() {
      const username = "shubham"
      let b=10;
      console.log(b);

      function Two(){
        const website = "youtube"
        console.log(username);
        
      }
    //   console.log(website); // ye access nhi hogi

      Two()
      
}  // isi ko closure kahte hai 

// one()

if(true){
    const username = "shubham"
    if(username === "shubham"){
        const website = "youtube"
        console.log( username + website);

    }
    // console.log(website);
    
}

// console.log(username); // it doesnot access because of out of scope

//++++++++++++++ intresting ++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num+1

}
console.log(addOne(5));

// console.log(addTwo(5)) // because of hosting it give error // decleration  se pahle nhi use kr skte 

const addTwo = function(num){
    return num + 3     // ye hai to function hai isko kabhi kabhi expression bhi bilte hai
}

console.log(addTwo(5))