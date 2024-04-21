/*Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
-----------------------------------------------------*/


const clock = document.querySelector("#clock")


//The setInterval() method calls a function at specified intervals (in milliseconds).
//there is 2 parameter 1st is function , 2nd is time in MS 
setInterval(() => {
    //The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.
    const date = new Date()
    //console.log(date.toLocaleDateString());

    clock.textContent = date.toLocaleTimeString()
}, 1000);
