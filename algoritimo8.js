// 8. Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome e a quantidade de
// letras que o nome possui, bem como a idade e o ano de nascimento
// do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
// 2000”.

var nome = prompt("Digite seu nome: ");
var idade = prompt("Digite sua idade: ");
var dateAno = new Date().getFullYear();

var resultAno = subtracao(idade, dateAno);

function subtracao(idade, dateAno) {

    let fullYear = dateAno - idade;

    return fullYear;

}


console.log(`Seu nome é: ${nome}. Seu nome possui ${nome.length} letras.`);
console.log(`Sua idade é: ${idade}. E voce nasceu em ${resultAno}`);