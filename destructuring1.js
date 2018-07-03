// novo recurso do ES2015
const Pessoa = { //objeto
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//console.log(Pessoa.nome, Pessoa.idade) //correto
//console.log(nome, idade) //errado, vai dar erro pois não vai encontrar as variáveis nome e idade

//Tradução: Pegue de dentro do objeto Pessoa, os atributos nome e idade e crie variáveis separadas do objeto
const { nome, idade } = Pessoa

//Pronto, agora eu posso trabalhar com estes atributos normalmente como variáveis, totalmente separados do objeto Pessoa
console.log(nome, idade)

//outra forma
const { nome: n, idade: i } = Pessoa
console.log(n, i)

//undefined
const { sobrenome, bemHumorada = false } = Pessoa
console.log(sobrenome, bemHumorada)

//pegar os valores de dentro do atributo endereco
const { endereco: {logradouro, numero} } = Pessoa
console.log(logradouro, numero)


