function add(x, y) {
  var total = x + y;
  return total;
}

const idadePai = 30
const idadeMae = 30
var totalSoma = add(idadePai, idadeMae);

console.log(totalSoma); //60

//o javascript ignora valores passados a mais
const idadeFilho = 10;
var totalSoma2 = add(idadePai, idadePai, 30);
console.log(totalSoma); //60, o valor de idadeFilho foi ignorado


/** Arguments */
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
  }
  return sum;
}

somaTotal = add(3, 5, 10);
console.log(somaTotal);
