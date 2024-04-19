

var a = prompt("Enter 1st number ")
var b = prompt("Enter 2nd number ") 

let check = Math.random();
let  c = prompt("Enter Opearator") 

if( check>10){

if(c == '+')
{
    console.log(a-b)

}

else if (c == '-')
{
    console.log(a/b)
}

else if (c == '*')
{
    console.log(a+b)
}
else if (c == '/')
{
    console.log(a**b)
}
}

else{
    // console.log(`the result is ${(`${a} ${c} ${b}`)}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);

}

