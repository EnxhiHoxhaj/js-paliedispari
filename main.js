// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// creare un prompt e chiedere l'user di scegliere pari o dispari
const pariDispari = prompt ("Pari o dispari?");
// Controllo che il valore inserito sia pari o dispari
const sceltoPD = pariDispari;
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
// generiamo un numero da 1 a 5 per il computer
// faccio la somma dei due numeri
// SE il mio numero è quanto scelo dal user...
// stampo "Sei il vincitore"
// SE diverso da quanto sceltro dall'user...
// stampa "Hai perso! il computer ti ha battutto"