function removerPropriedade (objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, 'b'))
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Nao preenchido'
}, 'descricao'))

//Resolução 2
function removerPropriedade (objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]

    return copia
}
console.log(removerPropriedade({a: 1, b: 2}, 'a'))
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Nao preenchido'
}, 'nome'))

