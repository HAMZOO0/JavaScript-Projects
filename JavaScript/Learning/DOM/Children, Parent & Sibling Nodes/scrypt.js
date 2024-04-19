/*

document.body
it can show the body of html page

document.body.childnodes 
it can show all the node 

document.children[0]
accessing first node 


document.body.childNodes[1].childNodes
accrssing node of node 

doc.body.fistelemntchild 
it can  skip or remmove text child and give us a proper box etc .. 


document.body.firstElementChild.children
here we first access the 1st elemnt node and then access the alll child elements nodes which are(box1,2,..)


document.body.firstElementChild.children[1].nextElementSibling
it can access next element sibling 

 */


let cot = document.body.childNodes[1].childNodes[1]
cot.firstChild