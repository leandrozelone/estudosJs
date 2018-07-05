/** Estrategia 1 */
function soma1(a, b, c) {
  a = a || 1 //a = a se tiver algum valor (true), senão retorna 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //não soma os zeros, pois o 0 retorna falso

function soma2(a, b, c) {
  a = a !== undefined ? a : 1 //se a não tiver valor, assume 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c //estratégia mais segura nesta soma
}

/** Forma mais nova e melhor: Valor padrão do es2015 */
//caso não seja passado algum argumento, o parâmetro recebe o que for passado
//neste caso, 1
function soma3(a = 1, b = 1, c = 1) { 
  return a + b + c 
}

/**
 * Um exemplo prático disto, é: usuário ainda não está logado (null), pode assumir
 * como usr padrão um usr anônimo. 
 */

 
