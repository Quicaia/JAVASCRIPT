/*
Para interagir com o terminal em JavaScript e solicitar entradas do usuário, você pode usar o pacote readline do Node.js. Primeiramente, instale o pacote com npm install readline. Em seguida, você pode importar o módulo readline e usar a função createInterface para criar uma interface com o terminal. Finalmente, use o método question para solicitar a entrada do usuário e processar a resposta. 
*/
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Qual é o seu nome? `, nome => {
  console.log(`Olá, ${nome}!`);
  readline.close();
});*/
// Para interagir com o terminal em JavaScript, você pode usar o pacote readline-sync.
// Primeiro, instale o pacote com npm install readline-sync.
const readline = require('readline-sync')

let nome =   readline.question("Qual é o seu nome?");

console.log(`Olá, ${nome}!`);