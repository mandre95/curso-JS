function calcularFatorial(numero) {
    if (numero == 0){
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
} 

console.log(calcularFatorial(10))
console.log(calcularFatorial(5))