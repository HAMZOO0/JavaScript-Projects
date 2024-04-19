function Greeting(name) {
    console.log("Hi " + name)
}

Greeting("Hamza")

///////////////////////////////////////////////////////////////////////////

function sum1(a,b) {
    console.log(a+b)
    
}

sum1(1,2)

///////////////////////////////////////////////////////////////////////////////

function sum(a,b) {
    return a+b;

}

result=sum(8,2)

console.log(result)

/////////////////////////////////////////////////////////////////////////////
function add(a, b) {
    return [a, b];
}

console.log(add(4, 5)); // Output: [4, 5]

function add(a, b) {
    return { a, b };
}

console.log(add(4, 5)); // Output: {a: 4, b: 5}


//////////////////////////////////////////////////////////////////////////////

// ... here it work as rest opearator . return array when we pass n values
function add(...a) {
    return a;
}

console.log(add(4, 5, 4, 4, 4, 4, 4, 3435, 3453, 47, 2, 5)); 

////////////////////////////////////////////////////////////////////////////////////

const fun = function(a)
{
    return a*a
}
console.log(fun(5));
//-------------
function f1(a)
{
    return a*a
}
console.log(f1(5));



/////////////////////////////////////////////////////////////////////////////
// Arrow Function 

fun = (x)=> console.log("Here is ::",x);
    
fun(1)
fun(2)
