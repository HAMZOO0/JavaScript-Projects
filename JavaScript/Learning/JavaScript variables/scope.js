// Global scope
var c = 300; // Declared with 'var', accessible globally
let a = 300; // Declared with 'let', accessible globally

if (true) {
    // Block scope
    let a = 10; // Declared with 'let', accessible only within this block
    const b = 20; // Declared with 'const', accessible only within this block

    // console.log("INNER: ", a); // Uncommenting this would log the value of 'a' inside this block
}

// console.log(a); // Logs the global value of 'a'
// console.log(b); // 'b' is not accessible here because it's declared inside a different block
// console.log(c); // Logs the global value of 'c'

function one(){
    // Function scope
    const username = "hitesh"; // Declared with 'const', accessible only within this function

    function two(){
        // Nested function scope
        const website = "youtube"; // Declared with 'const', accessible only within this function
        console.log(username); // 'username' is accessible here because it's declared in the outer scope
    }
    // console.log(website); // 'website' is not accessible here because it's declared inside a different function

     two(); // Call function two

}

// one(); // Uncommenting this would call function one and log "hitesh" to the console

if (true) {
    // Nested block scope
    const username = "hitesh"; // Declared with 'const', accessible only within this block
    if (username === "hitesh") {
        const website = "youtube"; // Declared with 'const', accessible only within this block
        // console.log(username + website); // Logs "hiteshyoutube" to the console
    }
    // console.log(website); // 'website' is not accessible here because it's declared inside a different block
}

// console.log(username); // 'username' is not accessible here because it's declared inside a block or function
