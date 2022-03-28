//Resolução 1
function checarAnosBissextos(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(checarAnosBissextos(2021))
console.log(checarAnosBissextos(2020))

//Resolução 2
function checarAnosBissextos2(ano2) {
    return new Date(ano2, 1, 29).getDate() === 29
}

console.log(checarAnosBissextos2(2021))
console.log(checarAnosBissextos2(2020))