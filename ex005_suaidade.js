//Você esta fazendo aniversario, mas n sabe quantas velas colocar no bolo. Sabe apenas o ano do seu nascimento e o ano atual.
//Desenvolva um programa que calcule quantas velas colocar no bolo.

const input = require('readline-sync');
let anoAtual = new Date().getFullYear();
let anoNascimento = Number(input.question('Digite o ano do seu nascimento: '));
let idade = anoAtual - anoNascimento;

if(anoNascimento > anoAtual) {
    console.log('Ano de nascimento inválido. Por favor, insira um ano válido.');
}
else if (anoNascimento < anoAtual) {
    console.log(`Você deve colocar ${idade} vela(s) no bolo.`);
    
}else {
    console.log('Erro ao calcular a idade. Verifique os dados inseridos.');
}

