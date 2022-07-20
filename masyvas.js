"use strict"

let masyvas = [];
function masyvoPildymas() {
let skaicius;
skaicius = document.querySelector('#skaicius').value;
masyvas.push(skaicius);
console.log(masyvas)
document.querySelector("#rezultatas").innerHTML = masyvas;
}

document.querySelector('#papildyti').addEventListener('click', masyvoPildymas);
        
    
     
 
        


    
