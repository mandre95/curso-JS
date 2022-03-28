// let e const 
{
    var a = 2 // var pode ser acessado fora do bloco(variavel global)
    let b = 3 // let só é acessada dentro do bloco (variavel de escopo)
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {idade: 9, nome: 'Ana'}
console.log(i, nome)