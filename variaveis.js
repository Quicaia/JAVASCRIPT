
//Variavel 
var nome = "Manuel"; 
let numero = 28;
const pi = 3.14

nome = "Paulo";
numero = 30;

console.log(nome, numero , pi)

// Tipos de Dados

let n1 = 2;
let n2 = 2.19;
console.log(n1, n2)
// JS Nao ha diferença entre inteiros e numero com casas decimais

//String que sao os textos 

let umTexto = "Ola tudo bem contigo Manuel #$%"
let nmTextoNumero = " 124"
 
//Operador de avaliacao de tipo
console.log(typeof umTexto)
console.log(typeof n1)

// Boolean = true, false 

let estaChovendo = false ;

console.log(estaChovendo)

console.log(typeof estaChovendo)

console.log(10 < 5)
//Variaveis null
let semValor = null

console.log(semValor)
console.log(typeof semValor)

let indefinido

console.log(indefinido)
console.log(typeof indefinido)

// Null = eu inicio algo nulo
// Undefinido = quando nao difino um valor 


// Tipagem Dinamica
// É a conversao do tipo da variavel de forma dinamica.

let tipagem = 100;

console.log(typeof tipagem)

tipagem = "texto";

console.log(typeof tipagem)

// Operaçoes Basicas 



//Concatenar Texto = É mesma coisa que unir 
let primeiroNome = 'Mateus'
let sobreNome = 'Oliveira'

// Nome + Sobrenome 
let nomeCompleto = primeiroNome + " " + sobreNome;
console.log("Ola, " + nomeCompleto + ", tudo bem ?")


//Operaçoes aritimeticas 

console.log(10 + 5)
console.log(10 - 5)
console.log(10 / 5)
console.log(10 * 5)
console.log(10 ** 5)

//Comparaçoes 

console.log(19 < 8)
console.log(19 > 8)
console.log(19 == 8)
console.log(19 != 8)
console.log(19 === 8)
console.log(19 !== 8)

//Toda comparaçao retorna um booleano

// >= , <= 
// ==, ===

console.log(10 == 10)

console.log(10 === 10)

console.log(10 == "10")

//Pode acarrentar em erros

console.log("10" + 1)

// Usa-se o === quendo quer se assegurar que o valor e o tipo sao iguais
console.log(10 === "10")

// = Nao é ==
// = > atribuiçao
// ==, === > comparaçao 

let a = 10;
let b = 20;

console.log((a = b))

console.log(a)

//comparaçao
console.log((a === b))