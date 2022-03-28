//Resolução 1
function removerVogais(frase) {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    vogais.forEach(vogal => frase = frase.replace(vogal, '') )

    return frase
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))

//Resolução2
function removerVogais2(frase2) {
    return frase2.replace(/[aeiou]/ig, '')
}

console.log(removerVogais2('Cod3r'))
console.log(removerVogais2('Fundamentos'))
console.log(removerVogais2('Javascript'))