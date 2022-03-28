//Resolução 1
function contarCaractere (caractereBuscado, frase) {
    let contador = 0

    for(let i = 0; i < frase.length; i++)
        if(frase.charAt(i) === caractereBuscado)
        contador++

    return contador
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))

//Resolução 2
function contarCaractere2(caractereBuscado2, frase2) {
    return [...frase2].filter(caractere => caractere === caractereBuscado2).length
}

console.log(contarCaractere2('r', 'A sorte favorece os audazes'))
console.log(contarCaractere2('c', 'Conhece-te a ti mesmo'))