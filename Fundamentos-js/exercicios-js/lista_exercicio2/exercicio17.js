//Resolução 1
function somarNumeros(numeros) {
    const quantidadeNumeros = numeros.length
    return (quantidadeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))

//Resolução 2
function somarNumeros1(numeros1) {
    let soma = 0
    numeros1.forEach(numero => soma += numero)

    return soma
}

console.log(somarNumeros1([10, 10, 10]))
console.log(somarNumeros1([15, 15, 15, 15]))

//Resolução 3
function somarNumeros2(numeros2) {
    const soma = numeros2.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log(somarNumeros2([10, 10, 10]))
console.log(somarNumeros2([15, 15, 15, 15]))