let a = "abcda!";

// This is how we access specific element 
// console.log(a[0]);
// console.log(a.charAt(5));
a.indexOf('a');


// console.log( a.toUpperCase()); uppcase convert

// console.log(a.length); find length

// console.log(a.slice(0,4)); we fetch 0th to 4th elemnts baki skip 

// console.log(a.slice(4)); now it fect 4th sy onward 

// console.log(a.replace('a',0));

/*
let nam1 = "hamza"
let nam2 = "khan"
let combo = nam1.concat(nam2,"yes")
console.log(combo);
here we concat 2 string and put it into 3rd one 
*/

// Diff way to print 
let mname = "Khan";
let f_name = "Kaju";
console.log("My name is " + mname + " fname is " + f_name);
console.log("My name is ", mname, " fname is ", f_name);
console.log(`my name is ${mname} and fname is ${f_name}`);


// how we add " in string 
let c = ' iio"asd'; 

//  Escape Sequence
let d= "asda\"asd";
let e= "AAA\rBBB";
console.log( c,d);
console.log( e);
