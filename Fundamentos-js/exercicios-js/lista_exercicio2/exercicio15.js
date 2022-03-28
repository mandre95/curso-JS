function retornarSomenteOsparesDeIndicePares (numero) {
    let resultado = []
    
    for(let i = 0; i < numero.length; i += 2) {
        const numeroPar = numero[i] % 2 === 0
    if(numeroPar)
        resultado.push(numero[i])
    }
    return resultado
}

console.log(retornarSomenteOsparesDeIndicePares([1,2, 2, 3 ,4]))
console.log(retornarSomenteOsparesDeIndicePares([10, 70, 22, 43]))
