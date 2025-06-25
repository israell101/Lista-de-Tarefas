let campo = document.querySelector(".campo"); //INPUT

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");

const icon = document.querySelector(".icons"); //PAI CLASS

const itens = document.querySelector(".itens-lista")

const editar = document.querySelector(".editar"); //TAREFA
const apagar = document.querySelector(".apagar"); //TAREFA

const limparTudo = document.querySelector(".btn-limpar");

let msg = document.querySelector(".msg-input");

let tarefas = [];

adicionar.addEventListener("click", adicionarTarefa);
limpar.addEventListener("click", limparCampo);
editar.addEventListener("click", editarTarefa);
apagar.addEventListener("click", deletarTarefa);
limparTudo.addEventListener("click", limparTarefas);

function adicionarTarefa() {
  

  if (campo.value.trim() === "") {
    msg.textContent = "Escreva uma tarefa";
    msg.style.color = "red";
  } 
  else {
    if (tarefas.includes(campo.value)) {
      msg.textContent = "Tarefa já existe";
      msg.style.color = "red";
    } 
    
    else {
      let listasTarefas = document.querySelector(".itens-lista");

      listasTarefas.innerHTML = "";

      for(let i = 0; i < tarefas.length; i++){
      // tarefas.push(campo.value);

      let novaLI = document.createElement("li");
      novaLI.classList.add("lista-item");

      let p_item = document.createElement("p");
      p_item.classList.add("texto-item");
      p_item.textContent = tarefas[i];

      let novaDiv = document.createElement("div");
      novaDiv.classList.add("icons");

      let novoI1 = document.createElement("i");
      novoI1.classList.add("fa-solid", "fa-pen", "editar", "icon");

      let novoI2 = document.createElement("i");
      novoI2.classList.add("fa-solid", "fa-trash", "apagar", "icon");

      novaDiv.appendChild(novoI1);
      novaDiv.appendChild(novoI2);

      novaLI.appendChild(p_item);
      novaLI.appendChild(novaDiv);
      listasTarefas.appendChild(novaLI);

      msg.textContent = "Tarefa adicionada";
      msg.style.color = "#1CCE3A";

      // campo.value = ""; // limpa o input

      console.log(tarefas)
      }
    }
  }
}



function deletarTarefa() {
  //let index = tarefas.indexOf(dado)
  // console.log(index)
}

function editarTarefa() {}

function limparTarefas() {
  tarefas.splice(0, tarefas.length);
}

function limparCampo() {
  campo.value = "";
  msg.textContent = "";
}
