// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) 


// Armazenando uma função arrow em uma variável
const imprimirSoma2 = (a, b) => { //uma oura forma de fazer a mesma coisa do exemplo acima, forma reduzida com o Arrow
    return a + b
}

console.log(imprimirSoma2(2,3))


// Retorno implícito
const imprimirSoma3 = (a, b) => a + b //utilizado geralmente quando a função é construída em apenas 1 linha, uma forma bem reduzida
console.log(imprimirSoma3(2,3))


// Uma forma ainda mais reduzida, quando é passado apenas 1 parâmetro na função
const imprimirSoma4 = a => console.log(a)
imprimirSoma4(13123)


//Exemplo prático
const somar = (a, b) => a + b
const resultado = somar(2, 3) //utilizando o resultade uma função em uma constante
console.log(resultado)

function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

var media = avg(2, 2);
console.log(media);