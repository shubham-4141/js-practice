const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift : "swift by apple"
}
// in tha forin loop object work properly 
for (const key in myObject) {
      console.log(`${key} shortcut is for ${myObject[key]}`);
       
}

const programing = ["js","rb","py","java","cpp"]

for (const key in programing) {
    // console.log(programing[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "france")
// map.set('IN',"India") // it can use only uniqe data 

// for (const key in map) { // is trh map pe ittrartion nhi ho skata
//     console.log(key);   
// map itrartable nhi hai
//}