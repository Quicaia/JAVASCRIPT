/*
// Operadores e comparaçao
// + , -, /, *

//NUMERO1 <OPERADORES> NUMERO2

console.log('12'+ 2) 
console.log(12 / 2) 
//ORDEMDE PROCEDENCI

const operacao = (12 + 5) * 2 + 4;
console.log(operacao)

//Operadores de Comparaçao 
// <,> >= , <= 
// ==, !=, ===, !==
console.log( 12 == "12")
console.log( 12 === "12")
console.log( 12 != 2)
console.log( 12 !== 2)
console.log( 12 !== "2")
console.log(12 !== 12)

//Operadores de incremento e pos icremento
//++; --
let num = 1;

console.log(num)

//Pós icremento

console.log(++num)
console.log(--num)

//muito utilizados em loops (for, while)

//operadore que permite executar sem repetiçao
//1º exemplo
num = num + 5;

console.log(num)

//nova forma
num += 5;

console.log(num)

num -= 2

console.log(num)
//Sintaxe 
//Variavel operaçao atribuiçao valor;

let num1 = 3;
let num2 = 5;

num1 += num2;
console.log(num1)
num2 *= num1
console.log((num2 /= 10))
*/
//Operadores de comparaçoe sempre vao ti retornar um booleano

//EXERCÍCIO 
//Cria um programa para saber se o Utilizadoro pode dirigir

const idade = 15;

const podeDirigir = idade >= 18;

console.log(podeDirigir);

if( podeDirigir == true){
    console.log("Voce pode dirigir")
}
else {
    console.log("Nao pode dirigir")
}
