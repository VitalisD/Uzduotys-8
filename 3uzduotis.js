"use strict";
let klientai = [];
for (let index = 0; index < 200; index++) {
    let klientas = {
        vardas: "vardas",
        pavarde: "pavarde",
        asmensKodas: "asmensKodas",
        prisijungimoData: "2022-01-01",
        adresas: "adresas",
        elpastas: "pastas@pastas.lt",

        pakeisk: function(sarasoNumeris) {
            this.vardas = "vardas"+sarasoNumeris;
            this.pavarde = "pavarde"+sarasoNumeris;
            this.asmensKodas = "asmensKodas"+sarasoNumeris;
            this.prisijungimoData = "2022-01-01"+sarasoNumeris;
            this.adresas = "adresas"+sarasoNumeris;
            this.elpastas = "pastas@pastas.lt"+sarasoNumeris;

        }

    }
    klientai.push(klientas);
    klientas.pakeisk(index);
    
}

console.log (klientai);

for(let index = 0; index < klientai.length; index++){

let tr;
tr = document.createElement("tr");

let td;
td = document.createElement("td");
td.innerHTML = klientai[index]["vardas"]
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = klientai[index]["pavarde"]
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = klientai[index]["asmensKodas"]
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = klientai[index]["prisijungimoData"]
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = klientai[index]["adresas"]
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = klientai[index]["elpastas"]
tr.appendChild(td);

document.querySelector(".klientai").appendChild(tr);
}
