// javascritp é multiparadigma podendo utilizar funcional, procedural e orientado a objeto

//função em JS é First-Class Object (Citizens)
//Higher-order function

//toda função em js retorna pelo menos um undefined, caso vc não chame um return
function fun1() { }
const fun2 = function() { }

//armazendando função em Array
const EuMeAmArray = [ function (a, b) { return a + b }, fun1, fun2]
console.log(EuMeAmArray[0](2,3))

//função como atributo de um objeto
const obj = {}
obj.nome = function() { return 'João' }

//função como parametro de outra função]
function run(fun) {
  fun() //executa a função que está sendo passada como parametro
}

//uma função pode retornar/conter uma função 
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2,3)(4)//podemos executar assim
//ou assim
const total = soma(2,3)
total(4)
