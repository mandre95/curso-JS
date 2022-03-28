function calcularPreco (idade) {
    if (idade < 10 ) {
        return 180
    } else if (idade < 30) {
        return 150
    } else if( idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8))
console.log(calcularPreco(25))
console.log(calcularPreco(31))
console.log(calcularPreco(59))
console.log(calcularPreco(65))