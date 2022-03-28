//Resolução 1
function inverter (objeto) {
    const objetoInvertido = {}

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
            valor = 1
        
        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objetoInvertido
}


console.log(inverter({a: 1, b: 2, c: 3}))

//Resolução 2

function inverter2(objeto2) {
    const paresDeChaveValorInvertidos = Object.entries(objeto2)
     .map( parChaveValor2 => parChaveValor2.reverse() )
    
     return Object.fromEntries(paresDeChaveValorInvertidos) 
}

console.log(inverter2({a: 1, b: 2, c: 3}))