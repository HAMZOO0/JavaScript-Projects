const random_no = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")

const userinput = document.querySelector("#guessSubmit")

const guess_list = document.querySelector(".guesses")

const remaing = document.querySelector(".lastResult")

const low_high = document.querySelector(".lowOrHi")

const sartover = document.querySelector(".resultParas")

const paragraph = document.createElement("p")

let previus_guess = []
let guess_counter = 1

let play_game = true 