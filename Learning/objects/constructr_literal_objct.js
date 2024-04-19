
// Object Literals:

// When you create an object using object literals, you're essentially creating a singleton object.
// Singleton means that there is only one instance of the object throughout the script.
// Any change made to this object affects all references to that object, as there's only one instance

let singletonObject = {
    name: "Singleton",
    value: 10
};

singletonObject.value = 20; // This change affects all references to singletonObject


// -------------++++++++++++++++++-----------------------------

// Constructor Functions:

// Constructor functions are used to create multiple instances of objects.
// Each instance created with a constructor function has its own set of properties and methods.
// Changes made to one instance of the object do not affect other instances because they are distinct objects.


function ObjectConstructor(name, value) {
    this.name = name;
    this.value = value;
}

let instance1 = new ObjectConstructor("Instance 1", 10);
let instance2 = new ObjectConstructor("Instance 2", 20);

instance1.value = 30; // This change only affects instance1