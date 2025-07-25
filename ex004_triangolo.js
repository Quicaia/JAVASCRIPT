
//Desenvolvi um programa que solicita ao usuario digitar os lados de um triângulo e verifica se é possível formar um triângulo com esses lados. Se for possível, se esse triângulo é equilátero, isósceles ou escaleno.
// Se não for possível, informa que não é possível formar um triângulo.
 // Triângulo é equilátero se todos os lados forem iguais, isósceles se dois lados forem iguais e escaleno se todos os lados forem diferentes.


const input = require('readline-sync');

let lado1 = Number(input.question('Digite o comprimento do primeiro lado do triângulo: '));
let lado2 = Number(input.question('Digite o comprimento do segundo lado do triângulo: '));
let lado3 = Number(input.question('Digite o comprimento do terceiro lado do triângulo: '));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

    if (lado1 === lado2 && lado2 === lado3) {
        console.log('O triângulo é equilátero.');
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log('O triângulo é isósceles.');
    } else {
        console.log('O triângulo é escaleno.');
    }
} else {
    console.log('Não é possível formar um triângulo com esses lados.');
}