let campo = document.querySelector(".campo"); //INPUT

let listasTarefas = document.querySelector(".itens-lista"); //UL DA LISTA

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");

const icon = document.querySelector(".icons"); //PAI CLASS

const editar = document.querySelector(".editar"); //TAREFA
const apagar = document.querySelector(".apagar"); //TAREFA

let msg = document.querySelector(".msg-input");

const tarefas = [];

adicionar.addEventListener("click", adicionarTarefa);
limpar.addEventListener("click", limparCampo);
editar.addEventListener("click", editarTarefa);
apagar.addEventListener("click", deletarTarefa);

function adicionarTarefa() {
  tarefas.push(campo.value);

  if (campo.value == "") {
    msg.textContent = "Escreva sua tarefa";
    msg.style.color = "red";
  } else {
    let novaLI = document.createElement("li");
    novaLI.classList.add("lista-item");
    // <li class="lista-item">
    listasTarefas.appendChild(novaLI);

    let p_item = document.createElement("p");
    p_item.classList.add("texto-item");
    novaLI.appendChild(p_item);
    //<p class="texto-item">Estudar HTML</p>
    p_item.textContent = campo.value;

    let novaDiv = document.createElement("div");
    novaDiv.classList.add("icons");
    //  <div class="icons"> </div>
    novaLI.appendChild(novaDiv);

    let novoI = document.createElement("i");
    novoI.classList.add("fa-solid", "fa-pen", "editar", "icon");
    // <i class="fa-solid fa-pen editar icon"></i>
    novaDiv.appendChild(novoI);

    novoI = document.createElement("i");
    novoI.classList.add("fa-solid", "fa-trash", "apagar", "icon");
    novaDiv.appendChild(novoI);

    msg.textContent = "Tarefa adicionada";
    msg.style.color = "#0AD350";

    console.log(tarefas)
    campo.value = "";
  }
}

function deletarTarefa() {
    
}

function editarTarefa() {
    
}

function limparCampo() {
  campo.value = "";
  msg.textContent = "";
}
