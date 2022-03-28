const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Objeto é uma coleção dinâmica de chaves e valores

console.log(Object.keys(pessoa))// imprime as chaves do objeto
console.log(Object.values(pessoa))// imprime os valores do objeto
console.log(Object.entries(pessoa))//imprime o array e o subArray contendo as chaves e os valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) //imprimir os valores do objeto usando a funcao forEach do Array (function destructuring)

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // propriedade pode ser listada? sim
    writable: false, //nao é uma propriedade que permite ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = {a: 1 }
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // assing concatena varios objetos em um só e último valor sobrescreve o primeiro

Object.freeze(obj)
obj.c = 1234
console.log(obj)