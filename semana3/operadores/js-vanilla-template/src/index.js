// Exercícios de interpretação de código

//Exercício 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  // a. false

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado) // b. false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado) // c. true

// console.log("e. ", typeof resultado) // e. boolean


//Exercício 2

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. 4

// const valor = array[i+6]
// console.log('f. ', valor) // f. 13

// Exercícios de escrita de código

// Exercício 1

// let idade = prompt("Qual sua idade?")
// let amigo = prompt("Qual a idade do seu melhor amigo?")

// idadeNumber = Number(idade)
// amigoNumber = Number(amigo)

// comparacao = idadeNumber > amigoNumber

// console.log("Sua idade é maior do que a do seu melhor amigo?",comparacao)

// diferenca = idadeNumber - amigoNumber

// console.log("A diferença de idades é: ",diferenca)


// Exercício 2

// let par = prompt("Insira um número par")
// parNumber = Number(par)

// console.log("O resto da divisão por 2 é: ", parNumber%2)

// Escrevendo números pares o código só imprime 0
// Se inserir um número ímpar o resto será sempre 1

// Exercício 3

// let listaDeTarefas = []

// let tarefa0 = prompt("Escreva a tarefa que você precisa realizar hoje")
// listaDeTarefas.push(tarefa0)
// let tarefa1 = prompt("Escreva a tarefa que você precisa realizar hoje")
// listaDeTarefas.push(tarefa1)
// let tarefa2 = prompt("Escreva a tarefa que você precisa realizar hoje")
// listaDeTarefas.push(tarefa2)

// console.log(listaDeTarefas)

// indice = prompt("Escreva o índice da tarefa que você realizou")
// indiceNumber = Number(indice)
// listaDeTarefas.splice(indiceNumber,1)

// console.log("Tarefas a serem realizadas: ",listaDeTarefas)

// Exercício 4

// nomeDoUsuario = prompt("Qual o seu nome?")
// emailDoUsuario = prompt("Qual o seu e-mail?")

// console.log("O e-mail "+ emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda(o) "+ nomeDoUsuario)

// DESAFIOS

// Exercício 1

// letra a
// let kelvin77F = (77 - 32)*5/9 + 273.15
// console.log("77°F são equivalentes a "+kelvin77F+"K") 

// letra b
// let fare80C = (80)*9/5 + 32
// console.log("80°C são equivalentes a "+fare80C+"°F")

// letra c
// let fare30C = (30)*9/5 + 32
// let kelvin30C = (fare30C - 32)*5/9 + 273.15

// console.log("30°C são equivalentes a "+fare30C+"°F"+ " e a "+kelvin30C+"K")

// letra d
// let celsius = prompt("Escreva a temperatura em graus Celsius")
// numberCelsius = Number(celsius)
// let grauF = (numberCelsius)*9/5 + 32
// let kelvin = (grauF - 32)*5/9 + 273.15

// console.log(numberCelsius+"°C são equivalentes a "+grauF+"°F"+ " e a "+kelvin+"K")

// Exercício 2

// letra a
// let kWh = prompt("Qual o consumo da sua casa em kWh?")
// numberkWh = Number(kWh)

// pagamento = numberkWh*0.05 // Com um consumo de 280 kWh a conta será de 14 reais

// console.log("Sua conta será de "+pagamento+" reais")

// letra b
// let desconto = prompt("Qual percentual de desconto?")

// pagDesconto = pagamento*(1 - desconto/100)

// console.log("Sua conta será de "+pagDesconto+" reais") // Com 15% de desconto a conta agora será de 11.9 reais

// Exercício 3

// letra a
// let lb = 20 // valor em libras
// kg = lb*0.4536 // conversão para kg

// console.log(lb+"lb equivalem a "+kg+"kg")

// letra b
// let oz = 10.5 // valor em oz
// kg = oz*0.02835 // conversão para kg

// console.log(oz+"oz equivalem a "+kg+"kg")

// letra c
// let mi = 100 // valor em milhas
// m = mi*1609.344 // conversão para metro

// console.log(mi+"mi equivalem a "+m+"m")

// letra d
// let ft = 50 // valor em pés
// m = ft*0.3048 // conversão para metro

// console.log(ft+"ft equivalem a "+m+"m")

// letra e
// let gal = 103.56 // valor em galões
// l = gal*3.7854 // conversão para litro

// console.log(gal+"gal equivalem a "+l+"l")

// letra f
// let xic = 450 // valor em xícaras
// l = xic*0.24 // conversão para litro

// console.log(xic+"xic equivalem a "+l+"l")

// letra g
let xicString = prompt("Escreva o volume em xícaras para ser convertido para litros") // valor em xícaras
xic = Number(xicString)
l = xic*0.24 // conversão para litro

console.log(xic+"xic equivalem a "+l+"l")