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

function Pessoa(nome, cpf, telefone) {
  this.nome = nome;
  this.cpf = cpf;
  this.telefone = telefone;
}

let pessoa = new Pessoa()

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