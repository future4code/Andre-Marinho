//------------------------------------EXEMPLOS------------------------------------

// EXEMPLO 01 - ESTRUTURA OBJETO

// const professora = {
//     nome: 'Letícia Chijo',
//     idade: 26,
//     frontend: true,
//     backend: false,
//     linguagens: ['javascript', 'Java', 'Python']
// }

// console.log(professora)

// EXEMPLO 02 - ACESSAR PROPRIEDADE
// const nomeDaProfessora = professora.nome

// const chave = 'linguagens'
// const linguagensProfessora = professora[chave]

// const arrayTeste = [professora.nome, professora.idade]

// console.log(nomeDaProfessora)
// console.log(linguagensProfessora)
// console.log(arrayTeste)

// EXEMPLO 03 - ALTERAÇÃO DO OBJETO
// professora.nome = 'Paulinha'
// professora[chave] = ['javascript', 'C++', 'Java']

// professora.linguagens.push('Ruby')

// professora.idade += 1
// professora.nome += ' Arantes'

// console.log(professora)
// console.log(nomeDaProfessora)

// EXEMPLO 04 - DESESTRUTURAÇÃO

// function comerFruta() {
//     console.log('Que fruta gostosa!')
// }

// const fruta = {
//     nome: 'laranja', 
//     tipo: 'cítrica', 
//     cor: 'laranja',
//     temCasca: true,
//     comer: comerFruta
// }

// const fruta2 = {
//     ...fruta,
//     nome: 'mexerica'
// }

// console.log(fruta)
// fruta.comer()

// EXEMPLO 05

// function apertouBotao(evento){
//     console.log(evento)
// }

// function digitouAlgo(evento){
//     console.log(event)
// }

// EXEMPLO 06 - PROTÓTIPOS DE STRING

// const teste = "Eu gosto muito de BATATA"
// console.log(teste.length)
// console.log(teste.includes('BATATA'))
// console.log(teste.split(' '))
// console.log(teste.toLowerCase())
// console.log(teste.toUpperCase())

// EXEMPLO 07 - PROTÓTIPOS DE ARRAY
// const beatles = ["Paul", "John", "Ringo", "George"]
// console.log(beatles.length)
// beatles.push("Lennon")
// console.log(beatles)
// console.log(beatles.indexOf("John"))
// beatles.pop()
// console.log(beatles)
// beatles.splice(1, 1)
// console.log(beatles)

//------------------------------------EXERCÍCIOS----------------------------------

// EXERCÍCIO 01 - FILME

// const filme = {
//     nome: undefined,
//     direcao:  'Bong Joon Ho',
//     ano: 2019,
//     elenco: [{nome: 'Song Kang-Ho', idade: 30}, {nome: 'Woo-sik Choi', idade: 30}, {nome: 'Park So-Dam', idade: 30}],
//     assistido: false,
// }

// filme.assistido = true
// filme.nota = 10

// console.log(filme)

// EXERCÍCIO 02 - LISTA DE COMPRAS

// function adicionaTexto() {
//     const container = document.getElementById("container")
//     const texto = document.getElementById("texto")
//     container.innerHTML += `<p>${texto.value}</p>`
//     texto.value = ""
// }

// function apertouBotao(evento){
//     console.log(evento)
//     adicionaTexto()
// }

// function apertouEnter(evento){
//     if (evento.key === 'Enter'){
//         adicionaTexto()
//     }
// }

// EXERCÍCIO 3 - VERIFICADOR DE IMAGEM

console.log(document.getElementById('container').innerHTML)

function identificarImagem() {
    const texto = document.getElementById('texto').value
    const container = document.getElementById('container')
    if (texto.includes('.png') || texto.includes('.jpg')){
        container.innerHTML += `<img src=${texto}>`
    } else {
        alert('Link incorreto! Insira imagem válida')
    }
}

function apertouEnter(evento) {
    if (evento.key === 'Enter'){
        identificarImagem()
    }
}

function apertouBotao(evento) {
    identificarImagem()
}
