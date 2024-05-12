/* promise is an object which perform opeartion in future 

 promise in obejct so we create new obj we use new 

 promise need call back parameter 
 and this call back have two parameter 1st resolve (if promise done ) and 2nd is reject (if promise is not done )
 
 */

//  -----------------------------------------------------------------------------------------------

// synetex 1
const promise1 = new Promise(function (resolve, reject) {
    // Here we do async task
    // network call , DB call etc ...

    setTimeout(function () {
        console.log('Async Task done ');
        resolve();
    }, 1000);
});

// resolve is connected with .then
promise1.then(function () {
    console.log('Function done');
});

//  -----------------------------------------------------------------------------------------------
// synetex 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task done ');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Function done');
});

//  -----------------------------------------------------------------------------------------------
// synetex 3
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // here we are passing obj which use also in .then()
        resolve({
            name: 'Khan',
            version: 'V12',
        });
    }, 1000);
}).then(function (user) {
    console.log(user);
});

//  -----------------------------------------------------------------------------------------------
// Concepts :
// now we call .then()  and retuen value which is parameter of another .then()

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: 'Khan',
            version: 'V12',
        });
    }, 1000);
});

promise4
    .then(function (user) {
        console.log(user);

        return user.name;
    })
    .then((name) => {
        console.log(name);
    });

//  -----------------------------------------------------------------------------------------------
// Concepts :
// #1 reject
// #2 finally

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;

        if (error) {
            resolve();
        } else {
            reject();
        }
    }, 1000);
});

promise5
    .then(() => {
        console.log(' Done  ');
    })
    .catch(() => {
        console.log(' Error  ');
    })
    .finally(() => {
        console.log('This function must execute in last ');
    });

//  -----------------------------------------------------------------------------------------------

const promise6 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (error) {
            resolve({ name: 'Khan', password: '2354fgh' });
        } else {
            reject('Error in JS ');
        }
    }, 1000);
});

async function promise5_connection() {


    try {
        const response = await promise6;
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}
promise5_connection()


const FF = fetch("https://api.github.com/users/HAMZOO0")
FF
    .then(() => {
        console.log(this.responseText);
    })
    .catch(() => {
        console.log(' Error  ');
    })
