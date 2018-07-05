/**
 * Arguments é a quantidade de argumentos passados em alguma função
 */
function soma() {
  let soma = 0
  /** for in, o mesmo que o foreach, utilizando como limite os argumentos passados à função */
  for (i in arguments) { 
    soma += arguments[i]
  }
  return soma
}

console.log(soma(2, 4, 2, 10, 20))