function cumprimentar (nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar("Maria"))
console.log(cumprimentar("Leonardo"))
console.log(cumprimentar("José"))
console.log(cumprimentar('Gabriel'))
 
// Resolução 2

function cumprimentar2(nome2) {
    const saudacao = "Olá"
    return [saudacao, nome2].join(', ').concat("!")
}

console.log(cumprimentar2('Josias'))

