let api_url = "https://api.github.com/users/"
const search_box = document.querySelector(".search_box")

// here we create function to attach the account name with api url to find account 
function api_url_name_attacher(account_name)
{
    api_url+=account_name
    console.log(api_url);
}


// here we accept input form user which is username of github 
search_box.addEventListener("submit",function(e){ // submit : when we press enter 

    e.preventDefault();

    const account_name = document.querySelector("#search_input_box").value
    //console.log(account_name);

    api_url_name_attacher(account_name)
})

