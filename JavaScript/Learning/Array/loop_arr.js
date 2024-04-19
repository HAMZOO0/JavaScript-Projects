// loops in array 
let array = [11, 12, 13, 14, 15, 16]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element, index)

}

// for each loop
let ary = [5, 6, 4, 3, 8, 6, 3, 2];
ary.forEach((value, index, arr) => {
    console.log(value, index, arr);
});


// for of loop 
for (const iterator of ary) {
    console.log(iterator);
}

//here we create new array by performing some operation on old array 
let newarr = ary.map((value , index , array )=>{

    // return index**2 ; 
    return value**2 ; 
})

console.log(newarr,'\n');
console.log(newarr.length);

// filter 
const grt_then5 = (e)=>{
if(e>5)
return true ; 
else 
return false ;
}
console.log(ary.filter(grt_then5));



// reduce perfom opeation of all elemnts 
const add = (a,b) =>{
    return a+b ; 
 }
    console.log(ary.reduce(add));
