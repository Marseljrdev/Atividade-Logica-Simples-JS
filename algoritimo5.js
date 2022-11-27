// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit

var grauCelsius = prompt("Digite a temperatura do grau celsius: ");

var farenheit = conversor(grauCelsius);

function conversor(grauCelsius) {

    let resultado = 0;

    resultado = grauCelsius * 9 / 5 + 32;

    return resultado;

}

console.log("O resultado da conversao é de: " + farenheit + "°F" );

// CALCULO DE CONVERSAO GRAU CELSIUS > FARENHEIT: gCelsius * 9 / 5 +32