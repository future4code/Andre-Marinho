console.log("Bem vindo ao jogo de Blackjack!")
let carta_user = []
let carta_pc = []
let i = 2
let cartas_iniciais = 0
let a0
let a1

let inicio = confirm("Quer iniciar uma nova rodada?")
if(inicio){

   carta_user.push(comprarCarta());
   carta_user.push(comprarCarta());

   carta_pc.push(comprarCarta());
   carta_pc.push(comprarCarta());  

   a0 = carta_user[0].texto
   a1 = carta_user[1].texto

   pa0 = carta_pc[0].texto
   pa1 = carta_pc[1].texto

   while (a0[0] == a1[0] && a0[0] == "A") {
      carta_user.splice(0,2) // limpar o array
      carta_user.push(comprarCarta()); // nova carta
      carta_user.push(comprarCarta()); // nova carta
      a0 = carta_user[0].texto
      a1 = carta_user[1].texto
    }
   
    while (pa0[0] == pa1[0] && pa0[0] == "A") {
      carta_pc.splice(0,2) // limpar o array
      carta_pc.push(comprarCarta()); // nova carta
      carta_pc.push(comprarCarta()); // nova carta
      pa0 = carta_pc[0].texto
      pa1 = carta_pc[1].texto
    }   

    // Impressão dos textos
    let texto = [];
    for (let n = 0;  n < carta_user.length; n++) {
       texto.push(carta_user[n].texto)  
    }

   let texto2 = [];
   for (let n = 0;  n < carta_pc.length; n++) {
      texto2.push(carta_pc[n].texto)  
   }

   // Soma dos pontos
   soma_user = 0
   for (let n = 0;  n < carta_user.length; n++) {
      soma_user = soma_user + carta_user[n].valor 
   }

   soma_pc = 0
   for (let n = 0;  n < carta_user.length; n++) {
      soma_pc = soma_pc + carta_pc[n].valor 
   }
   
   // Primeira opção de compra para o usuário
   let pergunta = (confirm(
            "Suas cartas são "+ texto +". A carta revelada do computador é "+ carta_pc[0].texto + "." +
            "\n"+
            "Deseja comprar mais uma carta?"
         )
      )
   
   // Caso o usuário queira comprar mais uma carta e ele ou o computador já tiver somado 21
    if (pergunta == true && soma_user == 21 && soma_pc < 21){
       alert(
          "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
          "As cartas do computador são " + carta_pc[0].texto +","+ carta_pc[1].texto + ". A pontuação do computador é " + soma_pc + ".\n" +
          "O usuário ganhou!")
     } else if (pergunta == true && soma_pc == 21 && soma_user < 21) {
       alert(
          "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
          "As cartas do computador são " + carta_pc[0].texto +","+ carta_pc[1].texto + ". A pontuação do computador é " + soma_pc + ".\n" +
          "O computador ganhou!")
    } else if (pergunta == true && soma_user == 21 && soma_pc == 21) {
       alert(
          "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
          "As cartas do computador são " + carta_pc[0].texto +","+ carta_pc[1].texto + ". A pontuação do computador é " + soma_pc + ".\n" +
          "Empate!")
    }

    // Looping compra do usuário
    while (pergunta == true && soma_user < 21 && soma_pc < 21) {
       carta_user[i] = comprarCarta();
       soma_user = soma_user + carta_user[i].valor
       texto.push(carta_user[i].texto)
       i += 1
       dif_user = Math.abs(21 - soma_user)
       dif_pc = Math.abs(21 - soma_pc)
       if (soma_user > 21) {
          alert(
             "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
             "As cartas do computador são " + carta_pc[0].texto +","+ carta_pc[1].texto + ". A pontuação do computador é " + soma_pc + ".\n" +
             "O computador ganhou!!")
         break
       } else if (soma_user == 21) {
             alert(
                "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
                "As cartas do computador são " + carta_pc[0].texto +","+ carta_pc[1].texto + ". A pontuação do computador é " + soma_pc + ".\n" +
                "O usuário ganhou!!")
             break
          } 
       pergunta = (confirm(
          "Suas cartas são "+ texto +". A carta revelada do computador é "+ carta_pc[0].texto + "." +
          "\n"+
          "Deseja comprar mais uma carta?"))   
    }

    // Looping compra do computador
    while (pergunta == false && soma_user <= 21 ) {
       carta_pc[i] = comprarCarta();
       texto2.push(carta_pc[i].texto)
       soma_pc = soma_pc + carta_pc[i].valor
       dif_pc = Math.abs(21 - soma_pc)
       if (soma_pc > 21) {
         alert(
            "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
            "As cartas do computador são " + texto2 + ". A pontuação do computador é " + soma_pc + ".\n" +
            "O usuário ganhou!!!")
         break
       } else if (soma_pc == soma_user && soma_pc == 21) {
         alert(
            "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
            "As cartas do computador são " + texto2 + ". A pontuação do computador é " + soma_pc + ".\n" +
            "Empate!!!")
         break
       } else if (soma_pc == 21) {
         alert(
            "Suas cartas são "+ texto +". Sua pontuação é "+ soma_user + ".\n" +
            "As cartas do computador são " + texto2 + ". A pontuação do computador é " + soma_pc + ".\n" +
            "O Computador ganhou!!!")
         break
         }
      }
   }