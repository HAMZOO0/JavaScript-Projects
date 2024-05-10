//Callbacks are passed as arguments to other functions.
function sum(a ,b ) {
    
    console.log(a+b);
}

function calcu(a,b,callback) {
    callback(a,b)
}

calcu(1,2,sum)


// -------------------------------------
// call back hell
function get_Data(data, next_Data) {
    setTimeout(() => {
        console.log('Data ::', data);
        if (next_Data) {
            next_Data();
        }
    }, 2000);
}

// here is this hell
get_Data(1, () => {
    get_Data(2, () => {
        get_Data(3);
    });
});
