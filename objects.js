/** criando um obj */
var obj = new Object();
//ou
var obj = {}; //mais conveniente, coração do formato JSON

/** acessando obj */
obj.name = "Simon";
var name = obj.name;
//ou.. //forma mais eficiente, melhor desempenho por utilizar strings
obj["name"] = "Simon";
var name = obj["name"]; 
//outro problema é o uso de palavras reservadas, exemplo abaixo
obj.for = "Simon"; // Erro de sintaxe, pois 'for' é uma palavra reservada
obj["for"] = "Simon"; // Funciona

//criando um objeto teste
var verdura = {
  name: "Carrot",
  "for": "Max",
  details: {
    color: "orange",
    size: 12
  }
}
console.log(verdura.details.color); //acesso desta forma
console.log(verdura["details"]["color"]); //ou também dessa





