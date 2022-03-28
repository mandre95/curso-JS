function progressaoAritmetica(n, a1, r) {
    for(let i = 0; i < n; i++){
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)
}

function progressaoGeometrica(n, a1, r){
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**1))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

progressaoAritmetica(10, 10, 15)
console.log('----------------')
progressaoGeometrica(10, 5, 3)