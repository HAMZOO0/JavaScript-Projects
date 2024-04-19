// when we on this mode then we change any text on page like a word doc 
document.designMode = "on"

// class list => .classlist 
// here we add another class 
document.querySelector(".main").classList.add("gig")

// here we toggle the class like if not aviable then add , if avable then remove  
// so i add it to change background 
document.body.classList.toggle("rang")


// use to find inner text of element  
document.body.querySelector(".box").innerHTML
// 'Hi Box Here '


// return outer htyml 
document.body.querySelector(".box").outerHTML
// '<div class="box">Hi Box Here </div>'


// use to fetch the text 
document.body.querySelector(".main").textContent
// '\n    Hi Box Here \n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet qui commodi! \n        '


// this is how to cahnge inner html 
document.body.querySelector(".box").innerHTML = "Bhi Dow opearation perfom kr ka dal raha hon ya mtlb "

// here i change the html of 2nd box also 
document.body.children[0].children[1].innerHTML = "la tari b change kr de "


//print all attributes 
document.body.querySelector(".main").attributes


// check that is (Give_name) attribute is avaible 
document.body.querySelector(".main").hasAttribute("class")
// true

// here we get the attribute 
document.body.querySelector(".main").getAttribute("class")

// here we change or set the attributes 
document.body.querySelector(".main").setAttribute("class", "Mongo") // here class name will mongo
// another ex:
document.body.querySelector(".main").setAttribute("style", "display : flex")

// .removeattribute to remove it 


// here we access the data attribute 
document.body.querySelector(".box").dataset
// DOMStringMap {created_by: 'Hamza'}


// inserting element 
// let ap = document.createElement("div");
//             ap.innerHTML = "Hi bhi kuch <i>maamla</i> sahi ni"
//             // ap.setAttribute("class","apdilo")
//             document.querySelector(".main").append(ap);


// here we add HTML dynamically 
let add = document.body
add.insertAdjacentHTML("beforebegin", "<b>i am on ground not on underawter gossay wala emoji")


