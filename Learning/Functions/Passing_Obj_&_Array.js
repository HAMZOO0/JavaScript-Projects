// passing obj 
const computer = {
    Name: "Core 2 Do ",
    price: 250000,
    model: 2023
}

function obj_handle(obj) {
    console.log(`Prince of ${obj.Name} is ${obj.price} and manfu in ${obj.model}`)
}

obj_handle(computer);
// we can also pass with decleartion  
obj_handle(
    {
        Name: "M.2",
        price: 250000,
        model: 2023

    }
)

///////////////////////////////////////////////////////////////////////////////////////

// passing Array

A = [1,3,4,5]
// console.log(A);

function Hnadle_ary(ary)
{
    console.log(ary);
}

Hnadle_ary(A)
