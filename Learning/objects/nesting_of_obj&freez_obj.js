// Nesting 
const Nust = {
    nust_student : {
        name : "Hamza",
        CMS : 478888 
    } , 

    Department : "Computer Science"
}


console.log(Nust.nust_student.name , Nust.nust_student.CMS , Nust.Department);

Object.freeze(Nust)
// here i am freezing the obejct , now no change will happpend 
