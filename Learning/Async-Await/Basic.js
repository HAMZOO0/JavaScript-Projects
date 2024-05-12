// async keyword use with function which make it async function and async function alwasy return a promise
function getdata(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Data ...', data);
            resolve(data); // Resolve with the data after the timeout
        }, 2000);
    });
}

// using iifi (this function not need a call to run )
(async function () {
    const data1 = await getdata(1);
    console.log('Data 1 fetched:');

    const data2 = await getdata(2);
})();

// gt();
