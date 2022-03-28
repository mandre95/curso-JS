let dobro = function (a) {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())