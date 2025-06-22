let campo = document.querySelector(".campo"); //INPUT

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");

const icon = document.querySelector(".icons"); //PAI CLASS

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
    return;
  }

  if (!tarefas.includes(campo.value.trim())) {
    tarefas.push(campo.value.trim());

    let listasTarefas = document.querySelector(".itens-lista"); // UL
    msg.textContent = "Tarefa adicionada";
    msg.style.color = "#1CCE3A";

    let novaLI = document.createElement("li");
    novaLI.classList.add("lista-item");

    let p_item = document.createElement("p");
    p_item.classList.add("texto-item");
    p_item.textContent = campo.value.trim();

    let novaDiv = document.createElement("div");
    novaDiv.classList.add("icons");

    let novoI1 = document.createElement("i");
    novoI1.classList.add("fa-solid", "fa-pen", "editar", "icon");
    novoI1.addEventListener("click", () => editarTarefa(p_item)); // evento direto

    let novoI2 = document.createElement("i");
    novoI2.classList.add("fa-solid", "fa-trash", "apagar", "icon");
    novoI2.addEventListener("click", () =>
      deletarTarefa(novaLI, p_item.textContent)
    );

    novaDiv.appendChild(novoI1);
    novaDiv.appendChild(novoI2);

    novaLI.appendChild(p_item);
    novaLI.appendChild(novaDiv);
    listasTarefas.appendChild(novaLI);

    campo.value = ""; // limpa input
  } else {
    msg.textContent = "Essa tarefa já existe";
    msg.style.color = "red";
  }
}


function deletarTarefa() {
  
}

function editarTarefa() {}

function limparTarefas() {
  tarefas.splice(0, tarefas.length);
}

function limparCampo() {
  campo.value = "";
  msg.textContent = "";
}
