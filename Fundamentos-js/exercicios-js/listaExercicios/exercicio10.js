function verificaSeEhDivisivelPorTres (numero) {
    let resto = numero % 3
    if (resto == 0) {
        return true
    }
    return false
}

console.log(verificaSeEhDivisivelPorTres(3))
console.log(verificaSeEhDivisivelPorTres(4))