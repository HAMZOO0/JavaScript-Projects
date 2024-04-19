let adjecives = {
    "1": " Crazy",
    2: "Amazing",
    3: " Fire"
}

let shop = {
    "1": " Engin",
    "2": "Food",
    "3": " Garments"
}
let word = {
    "1": " Bros",
    "2": "Limited",
    "3": "Hub"
}
let gen1 = Math.floor( Math.random() * 150 % 2 + 1.5)
let gen2 = Math.floor( Math.random() * 150 % 2 + 1.5)
let gen3 = Math.floor( Math.random() * 150 % 2 + 1.5)
console.log(adjecives[gen1]+' '+ shop[gen2]+' '+word[gen3])