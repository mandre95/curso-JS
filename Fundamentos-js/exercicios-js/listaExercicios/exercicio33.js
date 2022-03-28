let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Joao', 'Josias', 'Ero', 'Lucas']
let vetorDouble = [1.1, 4.2, 3.3, 1.5]

function concatenar(...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }

    return resultado
    }

console.log(concatenar(vetorDouble, vetorInteiro))
console.log(concatenar(vetorInteiro, vetorString))