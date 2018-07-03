{
    {
        {
            { 
                var sera = 'Será???' 
                console.log(sera)
            }
        }
    }
}

console.log(sera) //a variável 'sera' pode ser vista dentro ou fora do bloco, em outras linguagens isso não funciona

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) //nesse caso não é possível, pois local está numa função e só funciona lá dentro

