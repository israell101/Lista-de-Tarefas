let campo = document.querySelector(".campo"); //INPUT

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");

const icon = document.querySelector(".icons"); //PAI CLASS

const editar = document.querySelector(".editar"); //TAREFA
const apagar = document.querySelector(".apagar"); //TAREFA

const limparTudo = document.querySelector(".btn-limpar")

let msg = document.querySelector(".msg-input");

let tarefas = [];

adicionar.addEventListener("click", adicionarTarefa);
limpar.addEventListener("click", limparCampo);
editar.addEventListener("click", editarTarefa);
apagar.addEventListener("click", deletarTarefa);
limparTudo.addEventListener("click", limparTarefas);

function adicionarTarefa() {  
     
  if(campo.value == "") {
    msg.textContent = "Escreva uma tarefa";
    msg.style.color = "red";
  } 
  
  else {
    tarefas.push(campo.value);
    let listasTarefas = document.querySelector(".itens-lista"); //UL DA LISTA
    listasTarefas.innerHTML = ""

    msg.textContent = "Tarefa adicionada";
    msg.style.color = "#1CCE3A";

    console.log(tarefas)
    //console.log(tarefas)
    for (let i = 0; i < tarefas.length; i++) {
      let novaLI = document.createElement("li");
      novaLI.classList.add("lista-item");
      // <li class="lista-item">
      listasTarefas.appendChild(novaLI);

      let p_item = document.createElement("p");
      p_item.classList.add("texto-item");
      novaLI.appendChild(p_item);
      //<p class="texto-item">Estudar HTML</p>
      p_item.textContent = tarefas[i];
      p_item.value = "";
      console.log(p_item.value);
      let novaDiv = document.createElement("div");
      novaDiv.classList.add("icons");
      //  <div class="icons"> </div>
      novaLI.appendChild(novaDiv);

      let novoI1 = document.createElement("i");
      novoI1.classList.add("fa-solid", "fa-pen", "editar", "icon");
      // <i class="fa-solid fa-pen editar icon"></i>
      novaDiv.appendChild(novoI1);
      let novoI2 = document.createElement("i");
      novoI2.classList.add("fa-solid", "fa-trash", "apagar", "icon");
      novaDiv.appendChild(novoI2);

      
      // console.log(tarefas);
      // console.log(`${tarefas}`, tarefas.indexOf[i])
    }
  }
}

function deletarTarefa() {
  //let index = tarefas.indexOf(dado)
 // console.log(index)
}

function editarTarefa() {

}

function limparTarefas(){
  tarefas.splice(0, tarefas.length)
}

function limparCampo() {
  campo.value = "";
  msg.textContent = "";
}