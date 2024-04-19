// JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value

//Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

const nust_student = {

    name: "Hamza",
    Department: "CS",
    Semister: 2,
    Attendence: "100%",
    "is this student in universty": false

};

// way to print :
console.log(nust_student.Attendence);
console.log(nust_student["is this student in universty"]);

// here i am printing whole obj
console.log(nust_student);

// here we are creating a method for obj
nust_student.Greeting = function ()
{
    // console.log("AOA "+ this.name)
    console.log(`AOA, ${this.name}`)


}

// here i am using 
nust_student.Greeting();
