// 3. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

var custoFabrica = parseInt(prompt("Qual foi o custo de fabrica do su carro? "));
var porcentagmDist = 0.28;
var porcecnetagemImposto = 0.45;


var percDist = operacao1(porcentagmDist, custoFabrica);
var percImposto = operacao2(porcecnetagemImposto, custoFabrica);


function operacao1(porcentagmDist, custoFabrica) {

    let resultado = 0;

    resultado = porcentagmDist * custoFabrica / 100;

    return parseInt(resultado);

} 

function operacao2(porcecnetagemImposto, custoFabrica) {

    let resultado = 0;

    resultado = custoFabrica * porcecnetagemImposto / 100;

    return parseInt(resultado);

}

var resultFinal = (custoFabrica + percDist + percImposto);

console.log((`O reesultado final é: R$ ${resultFinal} ` ));

