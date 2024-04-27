function greetEnglish() {
  console.log("Hello!");
}

function greetSpanish() {
  console.log("¡Hola!");
}

let language = "english";
let greetFunction;

if (language === "english") {
  greetFunction = greetEnglish;
} else {
  greetFunction = greetSpanish;
}

greetFunction(); // Dynamically call the appropriate function
