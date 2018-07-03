console.log('a =', a)
var a = 2
console.log('a =', a)

/** O hoisting é o nível de içamento da variável
 * pois no escopo de função do javascript, não é possível içar uma variável
 * definida depois da chamada da função
 */

//com var
var name = 'Felipe';

function sayName() {
  console.log(name);
  var name = 'Carlos';
}

sayName();

//com let
let name = 'Felipe';

function sayName() {
  console.log(name);
  let name = 'Carlos';
}

sayName();