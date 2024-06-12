function numeroRandom (min, max) {
    const numeroGenerato = Math.floor(Math.random ()*(max - min + 1) + min);
    return numeroGenerato;
}

function sommaDueNumeri (num1, num2) {
    const risultato= num1 + num2;
    console.log(risultato);
    return risultato;
}

function OddEven (num1) {
    if (num1 % 2 === 0) {
        console.log("pari")
        return "pari"
    } else {
        console.log("dispari");
        return "dispari"
    }

} 
