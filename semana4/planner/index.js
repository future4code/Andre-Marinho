const dias =  document.getElementsByClassName("semana")

const diaSemana = document.getElementById("dias-semana")

let index

function criarTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    index = diaSemana.selectedIndex
    let tarefa = inputTarefa.value    
    console.log(tarefa)
    if(inputTarefa.value !== "" && inputTarefa.value !== undefined ) {
        dias[index].innerHTML += `<p onclick='sideEffect()'>- ${inputTarefa.value}</p>`
        inputTarefa.value = ""
    } else {
        alert("Entre com uma tarefa válida!")
    }   
}

function sideEffect() {
    dias[index].innerHTML -= `<p> <s>- ${inputTarefa.value} </s></p>`
}

