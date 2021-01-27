'use strict';

let darthVader = {}
darthVader["allegiance"] = "empire";
darthVader["weapon"] = "lightsabre";
darthVader["sith"] = "true";
darthVader["Jedi"] = "true";

console.log(darthVader);


console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.Jedi}`);

let myArray = ["hello", "everyone"];

console.log(myArray.length);

myArray.push("My");
myArray.push("name is");
myArray.push("Adi");
console.log(myArray);
console.log(myArray.length);

myArray.shift();
console.log(myArray);

for(let newArray of myArray){
    console.log(newArray);
}
