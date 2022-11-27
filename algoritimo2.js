// 2. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

var numTotalEleitores = prompt("Qual foi o numero total de eleitores no municipio? ");
var numTotalVotosBrancos = prompt("Qual foi o numero total de votos brancos? ");
var numTotalVotosNulos = prompt("Qual foi o numero total de votos nulos? ");
var numTotalVotosValidos = prompt("Qual foi o numero total de votos validos? ");

var percVotosBrancos = operacao1(numTotalVotosBrancos, numTotalEleitores);

function operacao1(numTotalVotosBrancos, numTotalEleitores) {
    
    let resultado = 0;
    
    resultado = numTotalVotosBrancos / numTotalEleitores * 100;
    
    return parseInt(resultado);
    
}

console.log('O percent de votos brancos é de : ' + percVotosBrancos,'%');


var percVotosNulos = operacao2(numTotalVotosNulos, numTotalEleitores);

function operacao2(numTotalVotosNulos, numTotalEleitores) {

    let resultado = 0;

    resultado = numTotalVotosNulos / numTotalEleitores * 100;

    return parseInt(resultado);

}

console.log('O percentual de votos nulos foi de: ' + percVotosNulos,'%' );



var percTotalVotosValidos = operacao3(numTotalVotosValidos, numTotalEleitores);

function operacao3(numTotalVotosValidos, numTotalEleitores) {

    let resultado = 0;

    resultado = numTotalVotosValidos / numTotalEleitores * 100;

    return parseInt(resultado);

}

console.log('O total de votos validos foi de: ' + percTotalVotosValidos,'%');