const form = document.querySelector("form")

form.addEventListener("submit", function (e) {

    e.preventDefault()// here when form submit values go to server so we prevent its default behvior 

    // here we get value and we get value in string so we need to chagne into int-float 
    const Height = parseFloat(document.querySelector('#height').value)
    const Weight = parseFloat(document.querySelector('#weight').value)

    const Results = document.querySelector('#results') // it is just element so no need to parse etc 


    // here we check the input value | if we not do this then it cause error 

    if(Height == '' || Height < 0 || isNaN(Height)) // isnan method use to check (height ) is a number or not is it number then it return false otherwise it return true like if we add string then it return true 
{
    Results.textContent="Plese Enter Valid Height "
}

else if(Weight == '' || Weight < 0 || isNaN(Weight))  
{
    Results.textContent="Plese Enter Valid Weight "
}


// here input is currect so we calculate BMI
else{
   const BMI = (Weight/((Height*Height)/10000)).toFixed(2) // two fixed means after decimal point we need 2 number 
   Results.textContent=`Your BMI is ${BMI} `

}


}) 