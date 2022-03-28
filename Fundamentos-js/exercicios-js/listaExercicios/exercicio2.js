function classificarTriangulo (ladoA, ladoB, ladoC) {
    if (ladoA == ladoB &&  ladoB == ladoC) {
        return 'Equilátero'
    }
    else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC ) {
            return 'Isóceles'
         } else {
             return 'Escaleno'
         }
}

console.log(classificarTriangulo(2, 2, 3))
console.log(classificarTriangulo(1, 2, 3))
console.log(classificarTriangulo(2, 2, 2))