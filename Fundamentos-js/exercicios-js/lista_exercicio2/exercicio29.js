//Resolução 1
function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior

    numeros.forEach((numero, indice) => {
        if(numero > numeros[indiceDoMaior] )
        indiceDoMaior = indice
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.forEach(numero => {
        if(numero > segundoMaior)
        segundoMaior = numero
    })
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))

//Resolução 2
function segundoMaior2(numeros2) {
    const maiorNumero = Math.max(...numeros2)
    numeros2 = numeros2.filter(numero => numero != maiorNumero)
    const segundoMaior2 = Math.max(...numeros2)

    return segundoMaior2
}

console.log(segundoMaior2([12, 16, 1, 5]))
console.log(segundoMaior2([8, 4, 5, 6]))

//Resolução 3
function segundoMaior3(numeros3) {
    const numerosOrdenados = numeros3.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior3 = numerosOrdenados[1]

    return segundoMaior3
}

console.log(segundoMaior3([12, 16, 1, 5]))
console.log(segundoMaior3([8, 4, 5, 6]))