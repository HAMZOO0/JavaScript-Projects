
// reduce method 
let arr=[];
let num = 5


    for( let i = 1 ; i<=num ; i++){
        arr.push(i);
    }


const fact= (a,b)=>{
    return a*b;
}

console.log(arr.reduce(fact))

// with for loop 



let x = 5 ; 
let fact=1;

    for( let i = 1 ; i<=x ; i++){
     fact =fact*i;  
    }
    
    console.log(fact);


