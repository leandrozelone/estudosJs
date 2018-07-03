/* Exemplos de funções em JS */

//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

var string = "Teste";
var outraString = "Outro Teste";

var concat = string + outraString;

console.log("Esta é uma concatenação" + string);


imprimirSoma(2, 3)
imprimirSoma(2) //sem passar todos os parâmetros, ele retorna um NaN, not a number


//função com retorno
function soma(a, b = 0) { //b como zero, caso não seja passado nada, b será 0
    return a + b
} 

console.log(soma(2, 3))
console.log(soma(2))



var a = "5";
var b = 5;

var total = a + b;
console.log(total);

console.log(typeof(a));



function concatena(um, dois) {
    return um + dois;
}

var nomeUm = "carol";
var nomeDois = "carlos"

var total = concatena(nomeUm, nomeDois);

console.log(total);



