//Resolução 1
function filtrarNumeros(array) {
    const resultado = []
    for(let item of array)
        if(typeof item ===  "number")
    resultado.push(item)
        
    return resultado
}

console.log(filtrarNumeros(['Javascript', 1, 'web', 2, 'moderno', 3]))

//Resolução 2
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(['Javascript', 1, 'web', 2, 'moderno', 3]))
