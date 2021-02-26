console.log("Bem vindo ao jogo de Blackjack!")
let carta_user = []
let carta_pc = []
let i = 0
let cartas_iniciais = 0

if(confirm("Quer iniciar uma nova rodada?")){

   while (cartas_iniciais < 2) {
      carta_user.push(comprarCarta());
      carta_pc.push(comprarCarta());
      cartas_iniciais++
      i++
   }  
  
   while (carta_user[0].texto === carta_user[1].texto && carta_user[0].texto === "A") {
      carta_user[0] = comprarCarta();
      carta_user[1] = comprarCarta();
   }
   
   while (carta_pc[0].texto === carta_pc[1].texto && carta_pc[0].texto === "A") {
      carta_pc[0] = comprarCarta();
      carta_pc[1] = comprarCarta();
   }   

   
   i += 1  // i = 3
   let texto = [];
   for (let n = 0;  n < carta_user.length; n++) {
      texto.push(carta_user[n].texto)  
   }

   soma_user = 0
   for (let n = 0;  n < carta_user.length; n++) {
      soma_user = soma_user + carta_user[n].valor 
   }

   soma_pc = 0
   for (let n = 0;  n < carta_user.length; n++) {
      soma_pc = soma_pc + carta_pc[n].valor 
   }

   
   let pergunta = (confirm(
            "Suas cartas são "+ texto +". A carta revelada do computador é "+ carta_pc[0].texto + "." +
            "\n"+
            "Deseja comprar mais uma carta?"
         )
      )
     
   while (pergunta == true) {
      carta_user[i] = comprarCarta();
      carta_pc[i] = comprarCarta();
      let texto2 = []
      for (i = 2;  i < carta_user.length; i++) {
         texto2.push(carta_user[i].texto)  
      }

      pergunta = (confirm(
         "Suas cartas são "+ texto2 +". A carta revelada do computador é "+ carta_pc[0].texto + "." +
         "\n"+
         "Deseja comprar mais uma carta?"
      )
   )
   }


 
//    //       console.log("Usuário - cartas:",carta_user.texto," - pontução",)
//    //       console.log("Computador - cartas:",carta_pc1.texto, carta_pc2.texto," - pontução",carta_pc1.valor+carta_pc2.valor)

//    //       if ((carta_user1.valor+carta_user1.valor) > (carta_pc1.valor+carta_pc2.valor)) {
//    //          console.log("O usuário ganhou!")
//    //       } else if ((carta_user1.valor+carta_user1.valor) < (carta_pc1.valor+carta_pc2.valor)) {
//    //         console.log("O computador ganhou!")
//    //       } else {
//    //         console.log("Empate!")    
//    //       }
//    //    }      
//    // }
// } else {
//    console.log("O jogo acabou")
// }
}
