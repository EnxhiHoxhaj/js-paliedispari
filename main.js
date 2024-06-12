/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
// creare un prompt e chiedere l'user di scegliere pari o dispari
const pariDispari = prompt ("pari o dispari?");
// Controllo che il valore inserito sia pari o dispari
let sceltoPD = pariDispari;
let ritenta;

if (sceltoPD === "pari" || sceltoPD === "dispari") {
    console.log(sceltoPD);
}else{
    ritenta = ("Puoi scegliere solo tra pari e dispari! refresha la pagina per ritentare");
    console.log(ritenta);
}
// creare un prompt numerico per l'User facendogli inserire un numero da 1 a 5
const userNum = parseInt(prompt("Segli un numero da 1 a 5"));
// faccio un controlla che il numero inserito sia da 1 a 5
if(userNum >= 1 && userNum <= 5){
    let numeroScelto = userNum;
    console.log(numeroScelto);
} else {
    ritenta = ("Se non scegli un numero da 1 a 5 non puoi giocare! refresha la pagina per ritentare");
    console.log(ritenta);
}
// generiamo un numero da 1 a 5 per il computer con una funzione
 let numeroComputer = numeroRandom (1, 5);
 console.log(numeroComputer);

// faccio la somma dei due numeri
let somma2Input = sommaDueNumeri (userNum, numeroComputer);

// Stabilisco se il mio numero è pari e dispari
let tipo = OddEven (somma2Input);
// stampo "Sei il vincitore"
let vincitore;
if (sceltoPD === tipo) { // SE diverso da quanto sceltro dall'user...
    vincitore = "hai vinto tu!";
} else { // stampa "Hai perso! il computer ti ha battutto"
    vincitore = ("Il vincitore è il Computer");
    
}

console.log(vincitore);