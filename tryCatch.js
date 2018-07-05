function tratarErroLancar(erro) {
    //throw new Error('Ocorreu um erro na aplicação, favor contatar o suporte.')
    //throw 10
    // throw 'mensagem'
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } //voce pode ate retornar um objeto com todas as informações do erro
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e);
    } finally {
        console.log('o finally emite uma msg dando erro ou não')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

