console.log("El FizzBuzzzzzzzzzzzzzz");
let numero = prompt("Ingrese un número:");

function fizzBuzz(numero) {
    if (isNaN(numero)) {
        return "Error: número inválido.";
    }
    else if (numero < 0) {
        return "Error: número negativo.";
    }
    else if (numero % 1 !== 0) {
        return "Error: el número no puede ser decimal.";
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }
}

console.log(fizzBuzz(numero));



const hola = function saludar(nombre) {
    return "hola " + nombre;
}
console.log(hola);