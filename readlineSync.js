const readlineSync = require('realine-sync');
const nome = readlineSync.question('Digite seu nome: ')

console.log('Ola, ' + nome + '! Seja bem vindo ao meu programa!');