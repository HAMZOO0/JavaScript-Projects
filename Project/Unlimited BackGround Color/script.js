// gernate random color 
function randow_color() {
    // total chars in hex 
    const hex = "0123456789ABCDEF"
    let color = "#" // color varbale use to add postion here 

    for(let i = 0 ; i <6 ;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }

    return color 
}



const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const body = document.querySelector("body")

let refernce_of_set_interval
start.addEventListener('click', (e) => {
    refernce_of_set_interval = setInterval(() => {

        body.style.backgroundColor=randow_color()
    },1000)
})

stop.addEventListener('click', (e) => {
    clearInterval(refernce_of_set_interval)
})