(async () => {
    let response = await fetch('https://cat-fact.herokuapp.com/facts');

    // fetch return json(response )
    //   console.log(response);

    // converting json into js obejct to use it properly
    let data_useable = await response.json(); // this is async function so we use await
    console.log(data_useable[0].text);
})();

// 2nd method
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
