//Resolução 1
function calcularMedia(numeros) {
    const quantidadeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
        somaTotal += numero
    }
    return somaTotal/quantidadeNumeros
}

console.log(calcularMedia([0 , 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

//Resolução 2
function calcularMedia2(numeros2) {
    const quantidadeNumeros2 = numeros2.length
    const somaTotal2 = numeros2.reduce((numeroA, numeroB) => numeroA + numeroB)

    return somaTotal2/quantidadeNumeros2
}

console.log(calcularMedia2([0, 10]))
console.log(calcularMedia2([1, 2, 3, 4, 5]))