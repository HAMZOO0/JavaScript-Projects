const student = () => {}
  
// -------------------------
() => { }
//-------------------
() =>
//----------
() => ()
// this is arrow funcions and differents way to write it 
//-------------------------------------------------------

// This is an example of an arrow function named 'add'
// It takes two parameters 'n1' and 'n2'
// It returns the sum of 'n1' and 'n2'
const add = (n1, n2) => {
    return n1 + n2
}
console.log(add(33, 7));
//--------------------------------------------------

// implicit return { here we remive brakets and return keywor}
 const sub1 = (n1, n2) => n1 - n2

// also use () and it is must for object return 

const sub2 = (n1, n2) => (n1 - n2)
