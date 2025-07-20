/*
// IF

// Servem para tomada de decisao ao longo do codigo

// if -> recurso
// () -> expressao que vai ser avaliada
// {} -> bloco de cod. que é executado
//Toda comparaçao / expressoes -> booleanos  

let hora = 10;
if( hora < 12){
    console.log("Bom dia!")
}
hora += 4;
// Se o if  for falso, o cod. nao é executado {}

//Toda coisa verdadeira > true
// O que for é > false 
// o Else executa o operaçao contrariv que o if, no caso se o if for falso;

if( hora < 12){
    console.log("Bom dia!")
} else{
    console.log("Boa Tarde")
}
//Verificar a temperatura

const temperatura =  36;

if (temperatura <= 18) {
    console.log("Esta frio!")
}
else {
    console.log("Esta Calor")
}
//n posso ter só o else, preciso do if
*/
// Exitem casos na programaça de mas de uma possibilidade 
// Para este casos existem os ELSE IF > permite 1 ou mais alternativas
//Exercício Calculo da Velocidade de uma via 

const velocidade = 90;

if( velocidade < 20) {
    console.log("Esta muito aboixo da velocidade minima")
} else if (velocidade < 50) {
        console.log("Recomendamos acelerar")
}
else if( velocidade <= 80){
    console.log("Velocidade Ideial")
}else if( velocidade <= 95){
    console.log("atencaçao !")
}
else{
    console.log("Execesso de velocidade !")
}

// IF: 1 apenas, Nao precisa de ngm
// ELSE IF: Posso ter N, mas preciso de if , precisa do IF e do ELSE
// ELSE : apenas 1, preciso do IF, nao do ELSE IF 


// SWITCH Case 
// ele é bom pra analisar casos com valores fixos
//Ex: Dia da semana

//Como podemos usar?
//IF: Geralmente casos com intervalos de valores 
//SWITCH: Gerlmente com   lores específicos 


let diaDaSemana = 1;

switch(diaDaSemana) {
    case 1:
        console.log("Segunda-Feira");
    break
    case 2:
         console.log("Terça-Feira");
    break
    case 3: 
         console.log("Quarta-Feira");
    break
    case 4: 
         console.log("Quinta-Feira ");
    break
    case 5: 
         console.log("Sexta-Feira");
    break
    case 6: 
         console.log("Sabado");
    break
    case 7:
        console.log("Domingo");
    break
    default:
        console.log("Dia de semana invalido!")
}

//Break > Serve para quebrar o ciclo caso a condiçao é encontrada 
// Default > Quando o ultilizadore poe uma condiçao inezistente 


//Operdores Logicos
// Sao 3
// AND &&
// OR ||
// NOT !

//Tabela Verdade
//Vao permitir lógicos mais complexos

//EXP1 && EXP2 > true se as 2 forem true
//EXP1 || EXP2 > true se as 1 forem true, false se as duas forem false 
// !EXP1 -> inverte o resoltado booleano: true = false; false = true

//Exercicio. Ver se o usurio pode dirigir 

let idadeDoUsario = 18;
let temCarta = false;

//Sempre viram boolean > true == true >> true == falsa 
    if( idadeDoUsario >= 18 && temCarta) {
        console.log("Pode Dirigir")
    }
    else(
        console.log("Nao pode dirigir")
    )

//cadastro no sitema
// ele pode fazer com o B.I ou com o passaporte..

let temBi = true;
let temPassaporte = false;

if( temBi || temPassaporte){
    console.log("Pode fazer o registo no sistema")
}
else {
    console.log("Nao pode fazer o registo")
}

//Usando o NOT

const estaChuvendo = true

if(!estaChuvendo){
    console.log("Não esta Chuvendo");
}