// 6. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

var numberOne = parseInt(prompt("Digite o primeiro numero: "));
var numberTwo = parseInt(prompt("Digite o segundo numero: "));

if( numberOne === numberTwo ) {
    console.log("Numeros iguais");
}else if(numberOne > numberTwo) {
    console.log("Primeiro é maior");
}else if(numberOne < numberTwo) {
    console.log("Segundo é maior");
}