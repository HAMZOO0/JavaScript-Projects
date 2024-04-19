// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


const student = {
    name: "Hamza",
    id: "1",
    department: "Computer Science"
};

// here we desturecture the object 
const k = student.department
console.log(k);

// also change the name 
const { id: CMS } = student
console.log(CMS);


// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

