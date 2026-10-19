console.log("Bienvenido a la calculadora de IMC javascript");
let peso = parseFloat(prompt("Ingrese el peso del paciente: (kg)"));
let altura = parseFloat(prompt("Ingrese la altura del paciente: (m)"));

function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        console.log("Error: El peso y la altura deben ser mayores a cero.");
        return null;
    }
    return peso / (altura * altura);
}
function clasificarIMC(peso, altura) {
    let imc = calcularIMC(peso, altura);
    if (imc === null) {
        return "Error en el cálculo del IMC";
    }
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc > 18.5 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
console.log("Clasificacion del paciente: " + clasificarIMC(peso, altura));