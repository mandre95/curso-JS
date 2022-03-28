function lanchonete (codigo, preço) {
    switch(codigo) {
        case "100":
            return `"Cachorro quente custa R$${preço.toFixed(2) * 3}"`
        break
        case "200":
            return `"Hambúrguer simples custa R$${preço * 4}"`
            break
        case "300":
            return `"Cheeseburguer custa R$${preço * 5.5}"`
            break
        case "400":
            return `"Bauru custa R$${preço * 7.50}"`
            break
        case "500":
            return `"Refrigerante custa R$${preço * 3.5}"`
            break
        case "600":
            return `"Suco custa R$${preço * 2.8}"`
            break
        default:
           return "Produto não existente"
    }
}
console.log(lanchonete("100", 2))
console.log(lanchonete("101"))
console.log(lanchonete("200", 1))
console.log(lanchonete("500", 3))
console.log(lanchonete("400", 600))