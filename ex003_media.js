//Desenvolva um programa que solicite a dois numero e no final calcule a média entre elas e mostra o resultado.

const readline = require('readline-sync');

let num1 = Number(readline.question('Digite o primeiro número: ')); 
let num2 = Number(readline.question('Digite o segundo número: '));

let media = (num1 + num2) / 2;

console.log(`A média entre ${num1} e ${num2} é: ${media.toFixed(2)}`);
console.log('Fim do programa.');