let maiorElemento = 1
let linha = ''
let coluna = ''
let minimaxColuna = ''
let menorElemento = 1000

let matriz = new Array(10)

matriz[0] = [10,10,10,10,10,10,10,10,10,10]
matriz[1] = [5,10,10,10,100,10,10,10,10,10]
matriz[2] = [10,1,101,10,10,10,10,10,10,10]
matriz[3] = [10,10,10,10,10,10,10,10,10,10]
matriz[4] = [10,10,10,10,10,10,10,10,10,10]
matriz[5] = [10,10,10,10,10,10,10,10,10,10]
matriz[6] = [10,10,10,10,100,10,10,10,10,10]
matriz[7] = [10,10,10,10,10,10,10,10,10,10]
matriz[8] = [10,10,10,10,10,120,10,10,10,2]
matriz[9] = [10,10,10,10,10,10,10,10,10,10]

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz.length; j++) {
        if(matriz[i][j] > maiorElemento) {
            maiorElemento = matriz[i][j]
            linha = i
            coluna = j
        }
    }
}

for(let a = 0; a < 10; a++) {
    for(let b = 0; b < 10; b++){
        if(matriz[linha][a] < menorElemento) {
            menorElemento = matriz[linha][a]
            minimaxColuna = a
        }
    }
}

console.log(`O minimax se encontra na posição da matriz linha ${linha} e coluna ${minimaxColuna}`)
console.log(`O maior elemento da matriz é o ${maiorElemento}`)
console.log(`O valor do minimax é ${menorElemento}`)