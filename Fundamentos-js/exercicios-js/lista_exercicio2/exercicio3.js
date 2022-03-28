function calcularSalario (horas, salario) {
    const valorSalario = salario - salario * 30/100
    const calcularSalario = horas * salario
    return calcularSalario = `Salário igual a ${calcularSalario}`
}

console.log(calcularSalario(180, 60))

//Resolução 2

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$ ${salarioLiquido}`
}

console.log(calcularSalarioLiquido(180, 60))