// 7. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

var totalMacas = prompt("Digite o total de maçãs compradas: ");

var totalCompra = calculo(totalMacas);

function calculo(totalMacas) {

    let result = 0;

    if(totalMacas < 12) {
        result = totalMacas * 0.30;
        return result;
    }else if(totalMacas >= 12) {
        result = totalMacas * 0.25;
        return result;
    }

}

console.log("O resultado total da compra foi de: R$" + totalCompra + ",00");