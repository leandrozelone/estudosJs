/** 
 * O tipo 'let' também é uma forma de variável, assim como 'var'. A diferença é que quando definida uma variável dentro
 * de um bloco com 'let', ela não se torna uma variável global, o valor só é válido naquele bloco. Diferente de uma 
 * variável tipo 'var' que é global e pode ser acessada em qualquer lugar
 * 
 */
var numero = 1

{
    let numero = 2 //só será visível dentro deste bloco
    console.log('dentro = ', numero) 
}
console.log('fora = ', numero)


//outro exemplo
var numero = 1

{
    let numero2 = 2
    console.log('dentro = ', numero) 
    /* Vai procurar alguma variável no escopo interno do tipo let, caso exista, ele da a preferencia. 
    Como nesse caso não existe nenhuma do tipo let, então é procurado fora, no caso ele pega a variável 'numero'*/
}
console.log('fora = ', numero)


//outro exemplo
var teste1 = 'teste'

{
    var teste1 = 19883 
    
    {
       let teste2 = 222
       console.log(teste1)
    }
}