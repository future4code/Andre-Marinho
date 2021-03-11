// Exercícios de interpretação de código

// EXERCÍCIO 1

// O código recebe um número do usuário, porém esse número é do tipo string.
// Após isso tranforma-se o número num tipo number e esse é salvo na variável "numero".
// Se o resto da divisão da variável "numero" por dois for igual a zero o programa irá imprimir a mensagem "Passou no teste." no console.
// Se não o programa irá imprimir  "Não passou no teste." no console.

// Em outras palavras, o código verifica se o número informado pelo usuário é par ou ímpar.
// Ele imprime "Passou no teste" para os números pares e o "Não passou no teste." para os números ímpares.

// EXERCÍCIO 2

// a. O código serve para informar o preço da fruta escolhida
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

// EXERCÍCIO 3

// a. Recebe o número informado pelo usuário, porém do tipo string, e o transforma no tipo number

// b. Se numero = 10, as mensagens são:
//    Esse número passou no teste
//    Erro
// Se numero = -10, a mensagem será de erro

// c. O erro se dá porque a variavel "mensagem" pertence ao bloco filho e quando pede-se para imprimi-la fora do bloco filho (no bloco pai)
// acontece o erro, pois um bloco filho não compartilha as variáveis com o bloaco pai
 
// Exercícios de escrita de código

// EXERCÍCIO 4

// let idade = Number(prompt("Qual sua idade?"))
// if (idade >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// EXERCÍCIO 5

// let turno = prompt("Indique seu turno de estudo M (matutino) ou V (Vespertino) ou N (Noturno)")
// if (turno == "M"){
//     console.log("Bom Dia!")
// } else if (turno == "V") {
//     console.log("Boa Tarde!")
// } else if (turno == "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Turno não existente")
// }

// EXERCÍCIO 6

// let turno = prompt("Indique seu turno de estudo M (matutino) ou V (Vespertino) ou N (Noturno)")
// switch(turno){
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Turno não existente")
// }

// EXERCÍCIO 7

// let filme = prompt("Qual gênero do filme escolhido?")
// let preco = Number(prompt("Qual preço do ingresso em R$?"))

// if (filme == "fantasia" && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// DESAFIOS

// DESAFIO 1

// let filme = prompt("Qual gênero do filme escolhido?")
// let preco = Number(prompt("Qual preço do ingresso em R$?"))

// if (filme == "fantasia" && preco < 15) {
//     console.log("Bom filme!")
//     snack = prompt("Qual snack deseja?")
//     console.log("... com ",snack)
// } else {
//     console.log("Escolha outro filme :(")
// }

// DESAFIO 2

let nome = prompt("Digite seu nome completo")
let tipo = prompt("Digite o tipo de jogo, IN indica internacional; e DO indica doméstico")
let etapa = prompt("Digite a etapa do jogo SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
let categoria = Number(prompt("Digite a categoria do ingresso, 1, 2, 3 ou 4"))
let quantidade = Number(prompt("Digite a quantidade de ingressos"))
let ingresso
let valor

if (etapa == "SF") {
    if (categoria == 1) {
        valor = 1320
        ingresso = valor*quantidade
    } else if (categoria == 2){
        valor = 880
        ingresso = valor*quantidade
    } else if (categoria == 3){
        valor = 550
        ingresso = valor*quantidade
    } else if (categoria == 4){
        valor = 220
        ingresso = valor*quantidade
    }
}

if (etapa == "DT") {
    if (categoria == 1) {
        valor = 660
        ingresso = valor*quantidade
    } else if (categoria == 2){
        valor = 440
        ingresso = valor*quantidade
    } else if (categoria == 3){
        valor = 330
        ingresso = valor*quantidade
    } else if (categoria == 4){
        valor = 170
        ingresso = valor*quantidade
    }
}

if (etapa == "FI") {
    if (categoria == 1) {
        valor = 1980
        ingresso = valor*quantidade
    } else if (categoria == 2){
        valor = 1320
        ingresso = valor*quantidade
    } else if (categoria == 3){
        valor = 880
        ingresso = valor*quantidade
    } else if (categoria == 4){
        valor = 330
        ingresso = valor*quantidade
    }
}

console.log("--Dados da compra--")
console.log("Nome do cliente: ",nome)
console.log("Tipo do jogo: ",tipo)
console.log("Etapa do jogo: ",etapa)
console.log("Categoria: ",categoria)
console.log("Quantidade de Ingressos: ",quantidade+" ingressos")
console.log("---Valores---")
if (tipo == "IN"){
    console.log("Valor do ingresso: U$ ",4.1*valor)
    console.log("Valor total: U$ ",4.1*ingresso)
} else {
    console.log("Valor do ingresso: R$ ",valor)
    console.log("Valor total: R$ ",ingresso)
}

