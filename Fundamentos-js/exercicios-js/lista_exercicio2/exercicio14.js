//Resolução 1
function objetoParaArray (objeto) {
    const resultado = []
    for (let chave in objeto) {
        resultado.push([chave, objeto[chave] ])
        return resultado
    }
}
console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))

//Resolução 2
function objetoParaArray2(objeto1) {
    const chaves = Object.keys(objeto1)
    const resultado2 = chaves.map(chave => [chave, objeto1[chave]] )
    return resultado2
}

console.log(objetoParaArray2({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))

//Resolução 3
function objetoParaArray3(objeto3) {
    return Object.entries(objeto3)
}

console.log(objetoParaArray3({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))

console.log(objetoParaArray3({
    codigo: 1111,
    preco: 12000
}))

