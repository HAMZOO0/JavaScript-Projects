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
