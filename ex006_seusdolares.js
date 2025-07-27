
//Cosntrua um programa que leia um valor em Kwanza (Kz) e converta este valor para   Dolar (USD).
// Considere a cotação de 1 USD = 917 Kz.

const input = require('readline-sync').question('Digite o valor em Kwanza (Kz): ');
let valorEmKz = parseFloat(input) / 917; // Conversão de dólares para Kwanza
// 1 USD = 917 Kz

console.log(`Valor em   Dolares (USD): ${valorEmKz.toFixed(2)}`);
// O resultado deve ser exibido com duas casas decimais.