console.log("sdaa")
function color_Gernat()
{
        let R  =   Math.ceil(Math.random() * 255)
        let G  =   Math.ceil(Math.random() * 255)
        let B  =   Math.ceil(Math.random() * 255)

        return `rgb(${R}, ${G}, ${B})`
}

let box = document.querySelector(".container") .children ;

Array.from(box).forEach(e=>
{
    e.style.backgroundColor=color_Gernat()
    e.style.color=color_Gernat()
})