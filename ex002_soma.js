//Desnvolva um programa qje solicite ao usuario que digite dois numeros e no final apresente o resuldtado da soma entre eles.
const readline = require('readline-sync');
let num1 = Number(readline.question('Digite o primeiro numero: '));
let num2 = Number(readline.question('Digite o segundo numero: '));

let soma = num1 + num2;
console.log(`A soma entre ${num1} e ${num2} é: ${soma}`);
//Fim do programa