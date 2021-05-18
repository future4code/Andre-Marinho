//a) para acessar os parâmetros passados pela linha de comando, utilizamos no
//código o process.argv[n] sendo n >= 2

//b)
// const nome = process.argv[2];
// const idade = process.argv[3];
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)
const nome = process.argv[2];
const idade = process.argv[3];
const novaIdade = Number(process.argv[3]) + 7
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)