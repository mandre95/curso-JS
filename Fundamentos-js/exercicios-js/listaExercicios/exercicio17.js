function reajusteFuncionario (plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido'
    }
}

console.log(reajusteFuncionario('A', 1000))
console.log(reajusteFuncionario('B', 1000))
console.log(reajusteFuncionario('C', 1000))
console.log(reajusteFuncionario('D', 1000))