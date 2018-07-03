//var, let e const

/**
 * Uma variável global perde o valor quando uma variável de escopo é definida
 * com o mesmo nome, usando 'var';
 */
var teste = 30;
function teste() {
  var teste = 40;
}
console.log(teste) //30

/**
 * Para que a mesma não perca o valor, é necessário definir a variável 
 * local com a palavra reservada 'let';
 */
var teste = 30;
function funcao() {
  let teste = 40; //não é possível acessar esta variável fora do escopo local
}
console.log(teste); //30

/** 
 * a única forma de acessar este tipo de variável é utilizando objetos
 */
function minhaFuncao(objeto) {
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = meucarro.make;     // x recebe o valor "Honda"

minhaFuncao(meucarro);
y = meucarro.make;     // y recebe o valor "Toyota"
// (a propriedade make foi alterada pela função)
