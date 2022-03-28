function verificaDiaDaSemana (numero) {
    switch (numero) {
        case 1: 
            console.log('Domingo, fim de semana')
            break
        case 2:
            console.log('Segunda, dia útil')
            break
        case 3:
            console.log('Terça, dia útil')
            break
        case 4:
            console.log('Quarta, dia útil')
            break
        case 5:
            console.log('Quinta, dia útil')
            break
        case 6:
            console.log('Sexta, dia útil')
            break
        case 7:
            console.log('Sábado, fim de semana')
            break
        default:
            console.log('Dia inválido')
    }   

}

verificaDiaDaSemana(1)
verificaDiaDaSemana(3)
verificaDiaDaSemana(8)


function verificaDiaDaSemana2 (numero) {
    switch (numero) {
        case 1:
        case 7:
            console.log('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia útil')
            break
        default:
            console.log('Dia inválido')
    }   
}

verificaDiaDaSemana2(5)
verificaDiaDaSemana2(3)
verificaDiaDaSemana2(7)