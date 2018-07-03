/** Vetores em JS possuem a propriedade lenght, que é o maior índice 
 * de um vetor + 1 
 */

//forma tradicional de criação de um vetor
var vetor = new Array();
vetor[0] = "dog";
vetor[1] = "cat";
vetor[2] = "hen";

//notação mais conveniente, usando vetor literal
var a = ["dog", "cat", "hen"];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//mais eficaz, pois não acessa a propriedade length toda vez que realiza uma iteração
var a = ["dog", "cat", "hen"];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(a[i]);
}

//forma ainda mais elegante
var a = ["dog", "cat", "hen"];
for (var i = 0, item; item = a[i++];) {
  console.log(item);
}


