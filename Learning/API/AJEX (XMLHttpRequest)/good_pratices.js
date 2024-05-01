const request_url = "https://api.github.com/users/HAMZOO0"

// creating xhr obejct 

const xhr = new XMLHttpRequest();

// here we use open method
xhr.open('Get', request_url);

xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 1) {
        console.log("1: server connection established");
    }
    else if (xhr.readyState == 2) {
        console.log("2: request received");
    }
    else if (xhr.readyState == 3) {
        console.log("3: processing request");
    }
    else if (xhr.readyState == 4) {
        console.log("4: request finished and response is ready ");
    }


}

// when response is ready || so when also check the status 
xhr.onload = function () {

    if (xhr.status == 200) {
        console.log("OK");

        const data = JSON.parse(this.responseText)
        // here we access the response and convert into json|object to access the data 
        console.log(data.login);

    }
    else if (xhr.status == 403) {
        console.log("Forbidden ");
    }
    else if (xhr.status == 404) {
        console.log("Page not found");
    }

}