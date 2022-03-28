function calculadoraJuros (aplicacao, taxa, tempo) {
    const investimento = taxa * tempo
    const rendimento =  aplicacao * (investimento/100)
    const valorTotal = aplicacao + rendimento
    
    return valorTotal

}
console.log(calculadoraJuros(100, 0.50, 2))

function calculadoraJurosCompostos(aplicacao, taxa, tempo) {
    const investimento = aplicacao * ((1 + taxa)**tempo)
    return investimento
}

console.log(calculadoraJurosCompostos(100, 0.50, 2))