let arr = [1, 2, 3, 45]

console.log(arr, typeof arr)

console.log(arr.length)

// here how we convert array into string 
console.log(arr.toString())


// convert comma into "xyz"
console.log(arr.join(" ::: "))


// remove last element 
arr.pop()
console.log(arr)

// add data in last of data
arr.push(100)
console.log(arr)
arr.push('a')
console.log(arr)

// remove 1st element 
arr.shift()
console.log(arr)

// // add elemnt in start
arr.unshift(.3)
console.log(arr)
// unshift push ka bhi ,  shift pop ka bhi :) 


// delete the element but memory still allocated 
delete arr[2]
console.log(arr)

// it remove elements form starting index to endig index and we also add the num 
let arr2= [1,2,33,4,6,7,8]

//here we delete 
// arr2.slice(1,4)
// here we add 
// arr2.slice(1,4,300,200)
// console.log(arr2)



// here concat 3 array
let a1 = [1,2]
let a2 = [3,4]
let a3 = [5,6]
a1.concat(a2,a3)
console.log(a1.concat(a2,a3))

