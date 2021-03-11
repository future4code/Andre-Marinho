// Exercícios de interpretação de código

// EXERCÍCIO 1

// a. Será impresso:
// 10
// 50

// b. Não seria impresso nada no console

// EXERCÍCIO 2

// a. Saída será os dois primeiros nomes:
// Darvas
// Caio

// b. Saída:
// Amanda
// Caio

// EXERCÍCIO 3

// A função cria um array com o quadrado dos números pares do array de entrada
// Um nome melhor seria "quadradoDosPares"


// Exercícios de escrita de código

// EXERCÍCIO 4
// a.
// const funcao1 = () => {
//     console.log("Eu sou André, tenho 28 anos, moro em Recife e sou estudante.")
// }

// funcao1()

// b.
// const funcao1 = (nome,idade,cidade,estudo) => {
//     idadeNumber = Number(idade)
//     if (estudo == true) {
//         resposta = "sou"
//         console.log("Eu sou "+nome+", tenho "+ idade+ " anos, moro em "+ cidade+" e "+ resposta+ " estudante.")
//     } else {
//         resposta = "não sou"
//         console.log("Eu sou "+nome+", tenho "+ idade+ " anos, moro em "+ cidade+" e "+ resposta+ " estudante.")
//     }
// }

// funcao1("Andre",28,"Recife",true)

// EXERCÍCIO 5
// a. 
// const funcao2a = (num1,num2) => {
//     soma = num1 + num2
//     return soma
// }

// console.log(funcao2a(80, 9))

// b.
// const funcao2 = (num1,num2) => {
//     if (num1 >= num2) {
//         maior = true
//     } else {
//         maior = false
//     }
//     console.log(maior)
// }

// funcao2(20,100)

// c. 
// const funcao2 = (palavra) => {
//     for (let i = 0; i < 10; i++) {
//         console.log(palavra)
//     }
// }

// funcao2("dedé")

// EXERCÍCIO 6
// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
// const funcao3 = (array) => {
//     tamanho = array.length
//     return tamanho
// }  
// console.log(funcao3(arrayNumeros))

// b.
// const funcao3b = (num) => {
//     if (num%2 == 0) {
//         par = true
//     } else {
//         par = false
//     }
//     return par
// }

// console.log(funcao3(543))

// c.
// const funcao3 = (array) => {
//     let pares = 0
//     for (let x of array) {
//         if (x % 2 == 0) {
//             pares++
//         }
//     }
//     return pares
// }  
// console.log(funcao3(arrayNumeros))

// d.
// const funcao3d = (array) => {
//     let pares = 0
//     for (let x of array) {
//         par = funcao3b(x)
//         if (par == true) {
//             pares++
//         }
//     }
//     return pares
// }  
// console.log(funcao3d(arrayNumeros))

// DESAFIOS

// EXERCÍCIO 1

// 1. 
// const funcao4_1 = (parametro) => {
//     console.log(parametro)
// }

// funcao4_1("dedé")

// 2. 
// const funcao4_2 = (valor1,valor2) => {
//     soma = valor1 + valor2
//     funcao4_1(soma)
// }

// funcao4_2(5,4)

// EXERCÍCIO 2

// a.
 const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// funcao5 = (array) => {
//     let paresVezes2 = []
//     for (let x of array) {
//         if (x%2 == 0){
//             paresVezes2.push(x*2)
//         }
//     }
//     return paresVezes2
// }

// console.log(funcao5(numeros))

// b.
// funcao5 = (array) => {
//     let maior = 0
//     let menor = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         } 
//     } 
//     return maior
// }
// console.log(funcao5(numeros))

// c.
// funcao5 = (array) => {
// let maior = 0
// let menor = 0
// let indice
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > maior) {
//         maior = array[i]
//         indice = i
//     } 
// } 
// return indice
// }
// console.log(funcao5(numeros))

// d.
funcao5 = (array) => {
    let inverso = []
    for (let i = array.length-1; i >= 0; i--) {
        inverso.push(array[i])
    }
    return inverso
    } 
  
console.log(funcao5(numeros))

