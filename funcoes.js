
/*/Funtions / Funções 

  O que é ? > É um conjunto de codigos ou isntruções que servem para
  executarem uma tarefa. Só são executada somento quando forem chamadas
  Podem ser utilizados varias vezes em qualquer trecho do codigo..
    [x]Função VOID (Vazia)
    [x]Função com Parâmetro
    [x]Função Return
    [x]Função ARROW FUNCTION

*/

const nome = "Dolapo";

function digaMeunome(){
    console.log("nome")
}
//digaMeunome()

// Funções com Parametro
//Sintaxe funtion nomeDafunçao(a,b...> que sao os parametros ou atributos da funçao){}
// É tal como se fosse uma variavel
/*function usuario(nome){
        console.log(nome)
}

//Tem que ser executada com os seus atributos
//Exemplo: nomeDafunçao(a,b...)

usuario("Manuel")
usuario("Tim")
usuario("Tom")
usuario("Tiago")
usuario("Joel")

function soma(numero1, numero2){
       let resultado = numero1 + numero2
       console.log(resultado)
}

soma(20, 5)
soma(89, 989)
soma(1007, 2000)
*/
//FUNÇÃO COM RETURN > ela sempre vai te retornar algum dado

function temDivida(receita, gastos){
      if( receita > gastos){
        return "Está no AZUL"
      }
      else {
        return "Está no VERMERLHO"
      }
}
//jjj
const joao = temDivida(190, 30)
const dom = temDivida(90, 30)
const pedro = temDivida(90,100)

/*
console.log(joao);
console.log(dom);
console.log(pedro);

*/ 

//Função ARROW FUNCTION
//É a forma mais moderna de representar uma função

//funtion abacate(){} > forma normal

const digaMeunome2 = ()=>{
    //podendo ter parametro tbm (nome, nome2..) =>{}
    console.log("Mingo")
}
digaMeunome2()