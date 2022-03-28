// Resoluçao 1
function menorNumero (numeros) {
    let menor  = numeros[0]
    for(let i in numeros)
        if(numeros[i] < menor)
            menor = numeros[i]

    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

//Resolução 2
function menorNumero2(numeros2) {
   return numeros2.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

console.log(menorNumero2([10, 5, 35, 65]))
console.log(menorNumero2([5, -15, 50, 3]))

//Resolução 3
function menorNumero3 (numeros3) {
    return Math.min(...numeros3)
}

console.log(menorNumero3([10, 5, 35, 65]))
console.log(menorNumero3([5, -15, 50, 3]))