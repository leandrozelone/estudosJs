const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push( 
        function(){
            console.log(i)        
        }
    )
}

funcs[2]() 
funcs[10]()

//aqui o valor retorna sempre 10, é um bug do JS.

