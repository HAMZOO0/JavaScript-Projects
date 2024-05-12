/* promise is an object which perform opeartion in future 

 promise in obejct so we create new obj we use new 

 promise need call back parameter 
 and this call back have two parameter 1st resolve (if promise done ) and 2nd is reject (if promise is not done )
 
 
 -----------------------------------------------------------------------------------------------
 */
 
 const pro = new Promise(function (resolve, reject) {

    console.log("Maza AYA");
    resolve("Done") // if we use just this is work with .then
    reject("Done") // it show error if we use this so we prefer if else 
  })

  // ----------------------------------------------------

  // here is the example when we get data from api , the api return a promis and then we perform opearations on this prmnis 
 const promis_data =  function (data) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("Data Fetched")},3000)
    })
  }

  promis_data(23)

  console.log(promis_data);



  
