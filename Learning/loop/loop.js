//for loop 
for (let index = 0; index < 5; index++) {
    console.log(1 + index)
}
//--------------------------------------------------------


// forin loop print obj 
let person = {

    name: "Hamza",
    age: 20,
    place: "pakistan"

}

for (const key in person) {
    const element = person[key];
    console.log(key, element)
    // here we print both keys and elements 

}

//--------------------------------------------------------
// for_of  loop  -> use to iterat on string or array 
for (const iterator of "ABCD") {
    console.log(iterator)
}

//--------------------------------------------------------
// while loop 

let a = 0;

while (a < 10) {
    console.log("h1", a)
    a++;

}

//--------------------------------------------------------
// do-while loop 
let b = 1;

do {
    console.log("h1", b++)


} while (b < 6);