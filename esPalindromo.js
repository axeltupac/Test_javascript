function palindromo(palabra) {
    let invertido = palabra.split('').reverse().join('');

    return palabra === invertido
}

console.log("¿Es un palindromo?" +
    palindromo("ana ana"));