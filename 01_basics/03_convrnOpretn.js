let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber); // jb hm score ko num me covert kiye to dekhne se to lag rha hai pr actually it does not convert in number it gives NaN type

console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN not an number iska type number hai vo confusing hai 
// true=>1//false=>0


let isLoggedIn = "null"

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 =>false
//" " => false
// "any string "=>true

