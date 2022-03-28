//Resolução 1
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []
    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length

        if(quantidadeDeDigitos === quantidadeDesejada)
        resultado.push(numero)
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))

//Resolução 2
function filtrarPorQuantidadeDeDigitos2(numeros2, quantidadeDesejada2) {
    return numeros2.filter(numero => {
        const quantidadeDeDigitos2 = String(numero).length

        return quantidadeDeDigitos2 === quantidadeDesejada2
    })
}

console.log(filtrarPorQuantidadeDeDigitos2([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1))