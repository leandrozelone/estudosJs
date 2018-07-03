function makePerson(first, last) {
  return {
    primeiroNome: first,
    ultimoNome: last,
    fullName: function() {
      return this.primeiroNome + ' ' + this.ultimoNome;
    },
    fullNameReversed: function() {
      return this.ultimoNome + ', ' + this.primeiroNome;
    }
  };
}

s = makePerson('Carlos', 'Felipe');
// console.log(s.fullNameReversed());

//construção de uma classe em JS antigo
// function Pessoa(nome, cpf, telefone) {
//   this.nome = nome;
//   this.cpf = cpf;
//   this.telefone = telefone;
// }

//construção de classe no ES2015 
class Pessoa {
  constructor(nome, cpf, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
  }
}

let pessoa = new Pessoa();
pessoa.nome = "carlota joaquina";
pessoa.cpf = "054.309.409-09"



function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this. first;
  };
}

var d = new Person('Simon', 'Willison');
console.log(d.fullName());