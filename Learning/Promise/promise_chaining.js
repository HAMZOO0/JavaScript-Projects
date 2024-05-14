const getData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Data ...", data);
            resolve(data); // Resolve with the data after the timeout
        }, 2000);
    });
};

getData(1)
    .then((res) => {
        console.log(res);
        return getData(2); // Returning a promise chain
    })
    .then((res) => {
        console.log(res);
    });


// ===============================================

/*

----------------------------------------------------------------------------------
fetch('https://cat-fact.herokuapp.com/facts')

.then((response)=>{
    response.json()
    console.log(response[0].text);
})

here i reserved error becuse i use console.log(response[0].text); before converting into js obejct 

*/

// we use 2nd then bcz 1s we want to resolve this reposne.json after this next opeartion will work or we say that we pause it

fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0].text);
    });
