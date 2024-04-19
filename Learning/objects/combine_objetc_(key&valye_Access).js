// marge / combine the obejct 

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }
const obj3 = { 5: "E", 6: "F" }
const obj4 = { 7: "G", 8: "H" }

const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)
// 1st {} empty obejct we  use , if not then all value store in obj1 
console.log(obj1)

// 2nd way | here we spread the obj 

const obj6 = { ...obj1, ...obj2, ...obj3 }
console.log('\n\n', obj6);


// Data date fetc : From db the data comes in the from of , array of object 

const Data = [
    {
        id: 1,
        name: "A",
        email: "@###"
    },
    {
        id: 1,
        name: "A",
        email: "@###"
    },
    {
        id: 1,
        name: "A",
        email: "@###"
    },
]
console.log(Data[0].name)

// here we accesss any  obejcg keys and values and it will return in array 

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
// in entries it reutrn each attribute in array
console.log(Object.entries(obj1))


//it can check ib obeject that property is value or not 
console.log(obj1.hasOwnProperty("1"));

/* let person = {
    name: "John",
    age: 30,
    isEmployed: true
};
In this object person, "name", "age", and "isEmployed" are properties. Their values are respectively "John", 30, and true. Properties allow you to access and manipulate data associated with an object. */ 
