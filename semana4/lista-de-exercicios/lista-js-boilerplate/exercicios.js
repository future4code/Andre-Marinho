//Exercício 1

function inverteArray(array) {
   const inverso = array.map((item, indice, array) => {
      return array[array.length - indice - 1]
   })
   return inverso
}

 let arrayEx = [1,2,3,4,5,6]
// console.log(arrayEx)
// console.log(inverteArray(arrayEx))


//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayPot = []
   array.forEach((item,indice,array) =>{      
      if (item%2 == 0) {
         arrayPot.push(item**2)
      }
   })
   return arrayPot
}

// let arrayEx = [1,0,2,3,4,5,6,7]
console.log(arrayEx)
// console.log(retornaNumerosParesElevadosADois(arrayEx))

//Exercício 3

function retornaNumerosPares (array) {
   let arrayPares = []
   array.forEach((item,indice,array) =>{      
      if (item%2 == 0) {
         arrayPares.push(item)
      }
   })
   return arrayPares
}

// console.log(retornaNumerosPares(arrayEx))

//Exercício 4

function retornaMaiorNumero(array) {
   maiorNumero = array.reduce((a,b) => {
      return Math.max(a,b)
   })
   return maiorNumero
}

// console.log(retornaMaiorNumero(arrayEx))

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

// console.log(retornaQuantidadeElementos(arrayEx))

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3
   const respostas = []
   
   respostas.push(booleano1 && booleano2 && !booleano4)
   respostas.push((booleano1 && booleano2) || !booleano3)
   respostas.push(booleano2 || booleano3) && (booleano4 || booleano1)
   respostas.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   respostas.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
   return respostas
}

// console.log(retornaExpressoesBooleanas())

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayPares = []
   let arrayNum = []

   for (let i=0; i < (1.5*n + 2); i++){
      arrayNum.push(i)
   }
   arrayNum.forEach((item,indice,array) =>{      
      if (item%2 == 0) {
         arrayPares.push(item)
      }
   })
   return arrayPares
 }

// console.log(retornaNNumerosPares(5))

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a == b && a == c) {
     return "Equilátero"
  } else if (a == b && a !== c) {
     return "Isósceles"
  } else {
     return "Escaleno"
  }
}

// console.log(checaTriangulo(1, 1, 1))

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior
   let menor
   let div
   let diferenca
   if (num1 > num2) {
      maior = num1
      menor = num2      
   } else if (num1 < num2) {
      maior = num2
      menor = num1
   } else {
      maior = "iguais"
   }
   if (maior%menor == 0) {
      div = true
   } 
   diferenca = maior - menor

   objSaida = {
      maiorNumero: maior,
      maiorDivisivelporMenor: div,
      diferenca: diferenca
   }
   return objSaida
}

// console.log(comparaDoisNumeros(1, 2))

// Exercício 10
arrayEx10 = [1,-2,5,3,4,5,6,-1,7]

function segundoMaiorEMenor(array) {
   arraySegundos = []
   let menor
   let menor2
   let maior
   let maior2

   if (array[0] > array[1]) {
      menor2 = array[0]
      menor = array[1]
      maior = array[0]
      maior2 = array[1]
   } else {
      menor2 = array[1]
      menor = array[0]
      maior = array[1]
      maior2 = array[2]
   } 

   // Para o segundo menor
   for (let i = 2; i < array.length; i++) {
      if (array[i] <= menor) {
         menor2 = menor
         menor = array[i]
      } else if (array[i] <= menor2) {
         menor2 = array[i]
      }
   }
     
   // Para segundo maior
   for (let i = 2; i < array.length; i++) {
      if (array[i] >= maior) {
         maior2 = maior
         maior = array[i]
      } else if (array[i] >= maior2) {
         maior2 = array[i]
      }
   }

   arraySegundos.push(maior2)
   arraySegundos.push(menor2)  
   return arraySegundos
}
// console.log(segundoMaiorEMenor(arrayEx)) // Outra opção seria usar a função do Exercício 4 (e outra similar para achar o mínimo) depois 
                                         // retirar o valor máximo e valor mínimo do array, criando um novo array sem esses valores.
                                         // E então aplicar novamente as funções para achar o máximo e mínimo desse novo array que são os
                                         // segundo maior e segundo menor valor 

//Exercício 11

function ordenaArray(array) {
   arrayOrdenado = []
   tamanho = array.length
   for (let i = 0; i < tamanho; i++) {
      menor = array.reduce((a,b) => {
         return Math.min(a,b)
      })
      arrayOrdenado.push(menor)
      let indice = array.indexOf(menor)
      array.splice(indice, 1)
   }
   return arrayOrdenado
}

// console.log(ordenaArray([5,6,8,1,4,7]))


// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] 
   }
   return filme
}

// console.log(filmeFavorito())

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] 
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.` 
}
// console.log(imprimeChamada())

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let largura = lado1
   let altura = lado2
   let perimetro = 2 * (lado1 + lado2)
   let area = lado1 * lado2
   const respostas = {
      largura: lado1,
      altura: lado2,
      perimetro: perimetro,
      area: area
   }
   return respostas
}

// console.log(criaRetangulo(1, 2))

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"

   return pessoa
}
const pessoaTeste = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@future4.com.br",
	endereco: "Rua do Futuro, 4"
}

// console.log(anonimizaPessoa(pessoaTeste))

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const maiores = arrayDePessoas.filter((pessoa)=>{
      if (pessoa.idade >= 20) {
         return true
      }
      return false
   })
   return maiores
}

// console.log(maioresDe18(arrayDePessoas))

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menores = arrayDePessoas.filter((pessoa)=>{
      if (pessoa.idade < 20) {
         return true
      }
      return false
   })
   return menores
}

// console.log(menoresDe18(arrayDePessoas))

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let arrayPor2 = []
   array.forEach((item)=> {
      arrayPor2.push(item*2)
   })
   return arrayPor2
}

// ex = [1,2,3,4,5]
// console.log(multiplicaArrayPor2(ex))

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let arrayPor2 = []
   array.forEach((item)=> {
      arrayPor2.push((item*2).toString())
   })
   return arrayPor2
}

// ex = [1,2,3,4,5]
// console.log(multiplicaArrayPor2S(ex))

// Exercício 17, letra C

function verificaParidade(array) {
   let arrayParidade = []
   array.forEach((item)=> {
      if (item%2 == 0) {
         arrayParidade.push((`${item} é par`).toString())
      } else {
         arrayParidade.push((`${item} é ímpar`.toString()))
      }
   })
   return arrayParidade
}
// ex = [1,2,3,4,5]
// console.log(verificaParidade(ex))

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const entraMontanha = pessoas.filter((pessoa)=>{
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
         return true
      }
      return false
   })
   return entraMontanha
}
// console.log(retornaPessoasAutorizadas())

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const naoAutoriza = pessoas.filter((pessoa)=>{
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
         return true
      }
      return false
   })
   return naoAutoriza
}
// console.log(retornaPessoasNaoAutorizadas())

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
   respostas = []
   consultas.forEach((consultas)=> {
      if (consultas.cancelada === false && consultas.genero === "masculino") {

         respostas.push(`Olá, Sr. ${consultas.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`)

      } else if (consultas.cancelada === false && consultas.genero === "feminino") {

         respostas.push(`Olá, Sra. ${consultas.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`)
         
      } else if (consultas.cancelada === true && consultas.genero === "masculino") {

         respostas.push(`Olá, Sr. ${consultas.nome}. Infelizmente sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)

      } else if (consultas.cancelada === true && consultas.genero === "feminino") {
         respostas.push(`Olá, Sra. ${consultas.nome}. Infelizmente sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
      }     
   })
   return respostas                
}

// console.log(retornaEmailConsulta())

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  contas.forEach((conta)=> {
     if (conta.cliente == "João") {
        conta.saldoTotal = 400
     } else if (conta.cliente == "Paula") {
      conta.saldoTotal = 6260
     } else if (conta.cliente == "Pedro") {
        conta.saldoTotal = -3340
     } else if (conta.cliente == "Luciano") {
        conta.saldoTotal = -1900
     } else if (conta.cliente == "Artur") {
      conta.saldoTotal = 1300
     } else {
      conta.saldoTotal = 1200
     }
  })
  return contas
}
// console.log(atualizaSaldo())