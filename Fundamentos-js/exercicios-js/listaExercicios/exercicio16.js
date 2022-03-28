function calculadora (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operação inválida'

    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 's', 3))