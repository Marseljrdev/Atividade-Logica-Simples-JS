// 4. Uma revendedora de carros usados paga a seus funcionários
// vendedores um salário fixo por mês, mais uma comissão também
// fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por
// ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
// ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor.

var salarioFixo = parseInt(prompt("Digite o falario fixo do funcionario: "));
var comissaoFixo = parseInt(prompt("Digite a comissão fixa para cada venda: "));
var totalCarros = parseInt(prompt("Digite quantos carros foram vendidos: "));
var totalVendas = parseInt(prompt("Digite o valor total das vendas: "));


var salarioFinal = operacao(salarioFixo, comissaoFixo, totalCarros, totalVendas);


function operacao(salarioFixo, comissaoFixo, totalCarros, totalVendas) {

    let resultado = 0;
    let totalComissao = 0;
    let resultFinal = 0;


    totalComissao = totalCarros * comissaoFixo;

    resultado = totalComissao + (totalVendas * 0.05);

    resultFinal = resultado + salarioFixo;

    return resultFinal;

}

console.log("Salario final do vendedor foi de: R$" + salarioFinal);