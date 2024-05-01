// APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

// The XMLHttpRequest object can be used to request data from a web server. or AJEX request 

// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.


// here we are creatinhg xhr object and it work with browser 


// url to requst 
const url = "https://api.github.com/users/HAMZOO0"

const xhr = new XMLHttpRequest();

// get measn we fetch the data 
xhr.open('Get', url)

// console.log(xhr.readyState); check state 

// after sending the xhr.send() we check the state 
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if(xhr.readyState == 4 )
    {
        const data = JSON.parse(this.responseText)
        // here we access the response and convert into json|object to access the data 
        console.log(data.login);
    }
}

// requst send 
console.log(xhr.send(),"seding ");
