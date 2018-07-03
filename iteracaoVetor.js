//iterando sobre um vetor
var a = ["dog", "cat", "hen"];
a[5] = "teste";

//inserindo valor no array
a.push("inserindo mais um valor");
//outra forma 
a[a.length] = "outra forma de inserir mais um valor"

/* percorrendo um array (foreach)
 * o foreach percorre todo o array, mostrando apenas os resultados válidos
 */
for (var i in a) {
  console.log('posição: ' + i + ' valor: ' + a[i]);
}

//o for percorre, porém mostra os dados undefined
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

