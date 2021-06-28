function invertir(palabra) {

    let invertido = "";
    for (let letra of palabra) {
        invertido = letra + invertido;
    }
    console.log(invertido)
    return invertido;
}

function invertirConMetodos(palabra) {

    return palabra.split("").reverse().join('');
}
invertir("hola")
invertir("se puede dar vuelta frases")
console.log(invertirConMetodos("hola"))
console.log(invertirConMetodos("se puede dar vuelta frases"))