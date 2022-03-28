//Resolução 1
function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for(let palavra of palavras)
        if(palavra.includes(inicio))
            resultado.push(palavra)
    return resultado
}

console.log(buscarPalavrasSemelhantes('pro', ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))

//Resolução 2
function buscarPalavrasSemelhantes2(inicio2, palavras2) {
    return palavras2.filter(palavra => palavra.includes(inicio2))
}

console.log(buscarPalavrasSemelhantes2('pro', ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes2("java", ["javascript", "java", "c++"]))