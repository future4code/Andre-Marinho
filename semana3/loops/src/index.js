// Exercícios de interpretação de código

// EXERCÍCIO 1

// O código esta somando na variável "valor" o valor do índice "i"
// Ou seja, a cada iteração o índice aumenta de 1 e é somado a várivel "valor"
// Logo, valor = 0+1+2+3+4
// E no console será impresso 10

// EXERCÍCIO 2

// a. 19
//    20
//    21
//    23
//    25
//    27
//    30

// b. 
// Sim, o for... of... é suficiente. Adicionando um índice "i" e o incrementando a cada posição como mostrado abaixo
// const lista = [10,11,12,15,18,19,21,23,25,27,30]
// let i = -1
// for (let numero of lista) {
//     i += 1
//     if (numero > 18) {
//         console.log(numero, "índice: "+i)
//     }
// }

// DESAFIO 1

// o código imprimirá a 0's até a quantidade desejada, logo se for digitado o número 4 o código imprimirá:
// 0
// 00
// 000
// 0000 


// Exercícios de escrita de código

// EXERCÍCIO 3
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a. 
// for (let valor of array) {
//     console.log(valor)
// }

// b.
// for (let valor of array) {
//     console.log(valor/10)
// }

// c.
// let pares = []
// for (let valor of array) {
//     if (valor%2 == 0) {
//         pares.push(valor)
//     }
// }
// console.log(pares)

// d.
// let index = []
// let i = -1 // será o index do array
// for (let valor of array) {
//     i += 1
//     index.push("O elemento do índex "+i+" é: "+valor)
// }
// console.log(index)

// e.
// let valorMinimo = 200
// let valorMaximo = 0

// for (let i = 0; i <array.length; i++) {
//     if (array[i] > valorMaximo) {
//         valorMaximo = array[i]
//     }
//     if (array[i] < valorMinimo) {
//         valorMinimo = array[i]
//     }
// }
// console.log("O maior número é",valorMaximo, "e o menor é",valorMinimo)

// DESAFIOS

//DESAFIO 1

// numero = Number(prompt("Jogador 1: digite o número que você está pensando"))
// console.log("Vamos jogar!")
// let i = 0
// let palpite

// while (palpite != numero) {
//     i++
//     palpite = Number(prompt("Jogador 2: digite o número que o jogador 1 está pensando"))
//     console.log("O número chutado foi: ",palpite)
//     if (numero > palpite){
//         console.log("Errou. O número escolhido é maior")
//     } else if (numero < palpite) {
//         console.log("Errou. O número escolhido é menor")
//     }
// }

// if (palpite === numero){
//     console.log("Acertou!!!")
//     console.log("O número de tentativas foi ",i)
// }

// DESAFIO 2

// numero = Math.floor((Math.random() * 100) + 1)
// console.log("Vamos jogar!")
// let i = 0
// let palpite

// while (palpite != numero) {
//     i++
//     palpite = Number(prompt("Jogador: digite o número que o computador está pensando"))
//     console.log("O número chutado foi: ",palpite)
//     if (numero > palpite){
//         console.log("Errou. O número escolhido é maior")
//     } else if (numero < palpite) {
//         console.log("Errou. O número escolhido é menor")
//     }
// }

// if (palpite === numero){
//     console.log("Acertou!!!")
//     console.log("O número de tentativas foi ",i)
// }

// A implementação dessa mudança foi bem fácil, apenas trocar o nome fornecido pelo jogador por um random gerado pelo computador