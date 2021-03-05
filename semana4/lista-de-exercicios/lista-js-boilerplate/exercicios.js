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
arrayEx = [1,0,2,3,4,5,6,-1,7]
function segundoMaiorEMenor(array) {
   let menor 
   let menor2
   if (array[0] > array[1]) {
      menor2 = array[0]
      menor = array[1]
   } else {
      menor2 = array[1]
      menor = array[0]
   }
   for (let i=2; i < array.length; i++) {
      if (array[i] < menor) {
         console.log("entrei")
         menor2 = menor
         menor = array[i]
         console.log(menor2,menor)
         return menor2 
      } 
   } 
}

console.log(segundoMaiorEMenor([1,0,2,3,4,5,6,-1,7]))

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

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

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

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
  // implemente sua lógica aqui
}