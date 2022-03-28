function formatarMoeda(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarMoeda(0.1 + 0.2)
formatarMoeda(1.15 + 0.46)