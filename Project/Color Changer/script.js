// here we select button in all_btn varbale
const all_button = document.querySelectorAll(".button")

// here we select body to change bkg color 
const body = document.querySelector("body")


// for each loop iterrate on all nodes 
all_button.forEach(function (all_button) {

    // here we listen the event and add function 
    //function(event): This is the callback function that will be executed when the "click" event occurs
    all_button.addEventListener("click", function (event) {

        console.log(event, event.target);

        if (event.target.id == 'grey') {
            body.style.backgroundColor = 'grey'
        }

        else if (event.target.id == 'white') {
            body.style.backgroundColor = 'white'

        }
        else if (event.target.id == 'blue') {
            body.style.backgroundColor = 'blue'

        }

        else if (event.target.id == 'yellow') {
            body.style.backgroundColor = 'yellow'

        }
    })

})
