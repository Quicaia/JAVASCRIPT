
//Desenvolva um programa que solicite o nome do usuário e exiba uma mensagem de boas-vindas personalizada. Utilize o //método question do módulo readline para capturar a entrada do usuário e, em seguida, exiba a mensagem de boas-vindas no console.

const readline = require('readline-sync');
let nome = readline.question("Qual é o seu nome ?");

console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);

//Fim do programa