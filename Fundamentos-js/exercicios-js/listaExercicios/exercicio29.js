function observarIntervalo (vetor) {
    qtdNumerosIntervalo = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosIntervalo++
        }
    }
    return `${qtdNumerosIntervalo} numeros dentro do intervalo.`
}

vetor = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))