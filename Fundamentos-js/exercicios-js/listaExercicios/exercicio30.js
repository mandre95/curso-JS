function maiorMenor (vetor) {
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]       
        } else {
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [10, 9, 5, 7, 3, 8, 11, 6, 4, 2, 1]

console.log(maiorMenor(vetor))