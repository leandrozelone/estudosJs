const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' //sobrescreve o atributo acima
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
    /*
    Explicação do 'this' pelo professor Leonardo: O this torna o atributo público
    quando se utiliza o this.nome, por exemplo, é possível acessar o atributo nome externamente
    */
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

