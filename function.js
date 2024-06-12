function numeroRandom (min, max) {
    const numeroGenerato = Math.floor(Math.random ()*(max - min + 1) + min);
    return numeroGenerato;
}