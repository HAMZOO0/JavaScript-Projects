async function fetching() {

    try {
        const requst = await fetch("https://api.github.com/users/HAMZOO0")
        if (!requst) {
            throw("Error")
        }
        const data = await requst.json()
        console.log(data);
    } catch (error) {
        console.log("Error", error);
    }

}

fetching()
// ---------------------------------------------------------------
// same above code in then catch 
fetch("https://api.github.com/users/HAMZOO0") 
 . then(()=>{
        log
 })
 . catch(()=>{
    
 })