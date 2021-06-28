function cantidad(parrafo, palabra) {

    let texto_limpio = parrafo.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0;
    if (texto_limpio.includes(palabra)) {
        let words = texto_limpio.split(" ");
        let mapa = {};
        for (let word of words) {

            if (mapa[word]) {
                mapa[word]++;

            } else {
                mapa[word] = 1;

            }
            resultado = mapa[palabra];
        }
    } else {
        resultado = 0;
    }


    return resultado


}


console.log("numero de coincidencias:" + cantidad("hola hola hola soy axel vos", "hola"));