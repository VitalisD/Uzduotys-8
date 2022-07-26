"use strict";
function skaiciuokBanknotus (){
    let g;
    g = parseInt(document.querySelector("#graza").value);
    let simtasKiek = parseInt(g/100);
    g = g % 100;
    let penkiasdesimtKiek = parseInt(g/50);
    g = g % 50;
    let dvidesimtKiek = parseInt(g/20);
    g = g % 20;
    let desimtKiek = parseInt(g/10);
    g = g % 10;
    let penkiKiek = parseInt(g/5);
    g = g % 5;
    let duKiek = parseInt(g/2);
    let vienasKiek = g % 2;
    let masyvas = [simtasKiek, penkiasdesimtKiek, dvidesimtKiek, desimtKiek, penkiKiek, duKiek, vienasKiek];
    console.log (masyvas);

}
document.querySelector("#skaiciuoti").addEventListener("click", skaiciuokBanknotus);