function inverso (valor) {
  const tipo = typeof valor
    if (tipo == "boolean") return !valor
        else if (tipo == "number") return -valor
    else 
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(-2000))
console.log(inverso("inverso"))