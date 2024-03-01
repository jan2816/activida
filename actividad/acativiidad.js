// Ejemplo con método forEach
let arrayNumeros = [1, 2, 3, 4, 5];

function multiplicarPorDos(elemento) {
    console.log(elemento * 2);
}

console.log("Ejemplo con forEach:");
arrayNumeros.forEach(multiplicarPorDos);

// Ejemplo con método map
let arrayCuadrados = arrayNumeros.map(numero => {
    return numero ** 2;
});

console.log("Ejemplo con map:");
console.log(arrayCuadrados);

// Ejemplo con método filter
let arrayPares = arrayNumeros.filter(numero => {
    return numero % 2 === 0;
});

console.log("Ejemplo con filter:");
console.log(arrayPares);

// Ejemplo con método reduce
let sumaTotal = arrayNumeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);

console.log("Ejemplo con reduce:");
console.log(sumaTotal);

// Ejemplo con método find
let numeroMayorQueTres = arrayNumeros.find(numero => {
    return numero > 3;
});

console.log("Ejemplo con find:");
console.log(numeroMayorQueTres);

// Ejemplo con método every
let todosMayoresQueCero = arrayNumeros.every(numero => {
    return numero > 0;
});

console.log("Ejemplo con every:");
console.log(todosMayoresQueCero);
