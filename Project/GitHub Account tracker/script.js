//let api_url = "https://api.github.com/users/"

const search_box = document.querySelector(".search_box")

const img_box = document.querySelector(".img_box")

const name = document.querySelector(".name")

const followers = document.querySelector(".followers")

const repos = document.querySelector(".repo")

const img = document.querySelector(".img_box")




// here we create function to attach the account name with api url to find account 
function api_url_name_attacher(account_name) {
    api_url += account_name
    //console.log(api_url);
}

function DATA_Access() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", api_url)
    xhr.send()

    xhr.onload = function () {
        if (xhr.status == 200) {
            const data = JSON.parse(this.responseText)

            console.log(data)

            name.innerHTML += data.name
            followers.innerHTML += data.followers
            repos.innerHTML += data.public_repos
            img.innerHTML = `<img src="${data.avatar_url}" alt="pic" width="255px">`

        }

        else {
            console.log("Error");
        }
    }
}


// here we accept input form user which is username of github 
search_box.addEventListener("submit", function (e) { // submit : when we press enter 

    e.preventDefault();

    const account_name = document.querySelector("#search_input_box").value
    //console.log(account_name);

    api_url_name_attacher(account_name)

    DATA_Access()
})

//------------------------------

