// 10. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

var anoAtual = new Date().getFullYear();
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento"));

var resultAno = calculo(anoAtual, anoNascimento);

function calculo(anoAtual, anoNascimento) {

    let resultado = 0;

    resultado = anoAtual - anoNascimento;

    if( resultado >= 16 ) {
        console.log("Voce pode votar nesse ano ");
    }else if( resultado < 16 ) {
        console.log("Voce não pode votar nesse ano");
    }

}