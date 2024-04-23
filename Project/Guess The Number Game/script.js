let random_no = Math.floor(Math.random() * 100 + 1); // gernate valid number 

const submit = document.querySelector("#subt")  // submit form 

const userinput = document.querySelector("#guessField")  // input 

const guess_list = document.querySelector(".guesses")  // array of user inputs 

const remaing = document.querySelector(".lastResult")  // remaing list 

const low_high = document.querySelector(".lowOrHi")  // check gusses is low or high form actual number 

const startOver = document.querySelector(".resultParas")

const paragraph = document.createElement("p")

let previus_guess = []
let guess_counter = 1
let play_game = true
// it is true then game will start







if (play_game)

    submit.addEventListener("click", function (e) {

        e.preventDefault()

        const userinut_value = parseInt(userinput.value)

        console.log(userinut_value);
        // here input is sending to validguess function to perform more opearations 
        validguess(userinut_value)
    })





function validguess(guess) {

    //here we check is the number is valid or not 

    // if number is not valid 
    if (isNaN(guess) || guess < 0 || guess > 100) {
        alert("Inter a valid number ( 0 - 99 )")
    }


    // if number is valid 
    else {
        // 1st we move this guess to array of previus guesses array 
        previus_guess.push(guess)

        //here we check is this guess is last or not if yes then we pass a massage to dislay massage function 
        if (guess_counter == 11) {
            display_guess(guess)
            display_massg(`Game Over . Answer Was ${random_no}`)
            end_game()
        }

        // if guess is not last then ... 
        else {
            display_guess(guess)
            check_guess(guess)
        }
    }

}






// in this function we check the user guess is right or not 
function check_guess(guess) {

    if (guess == random_no) {
        display_massg(`You Guessed it right`)
        end_game()
    }

    else if (guess < random_no) {
        display_massg(`The number is Too low `);


    }

    else if (guess > random_no) {
        display_massg(`The number is Too high `);


    }


}






function display_massg(message) {

    low_high.innerHTML = `<h2>${message}</h2>`
}



function display_guess(guess) {

    userinput.value = ''

    guess_list.innerHTML += `${guess}, `

    guess_counter++

    remaing.innerHTML = `${11 - guess_counter}`

}

function new_game() {
    const new_game_buton = document.querySelector("#newGame")


    new_game_buton.addEventListener('click', function (e) {
        random_no = Math.floor(Math.random() * 100 + 1);
        previus_guess = []
        guess_counter = 1
        remaing.innerHTML = `${11 - guess_counter}`
        guess_list.innerHTML = ``
        userinput.removeAttribute("disabled")
        startOver.removeChild(paragraph)

        play_game = true
    })
}

function end_game() {
    userinput.value = ''
    
    //here we disable the input 
    userinput.setAttribute('disabled', '');

    
    // adding button to start new game 
    paragraph.classList.add = "Button"
    
    paragraph.innerHTML = `<h2 id="newGame">Start New Game </h2>`
    
    startOver.appendChild(paragraph)
    
    
    play_game = false
    new_game()
}