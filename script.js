let campo = document.querySelector(".campo"); //INPUT

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");
const editar = document.querySelector(".editar"); //TAREFA
const apagar = document.querySelector(".apagar"); //TAREFA

const listasTarefas = document.querySelector(".lista-item");

const icon = document.querySelector(".icons"); //PAI CLASS

const limparTudo = document.querySelector(".btn-limpar");

let msg = document.querySelector(".msg-input");

let tarefas = [];

adicionar.addEventListener("click", adicionarTarefa);
limpar.addEventListener("click", limparCampo);
editar.addEventListener("click", editarTarefa);
apagar.addEventListener("click", deletarTarefa);
limparTudo.addEventListener("click", limparTarefas);

function adicionarTarefa() {
  if (campo.value == "") {
    msg.textContent = "Escreva uma tarefa";
    msg.style.color = "red";
  } else {
    if (tarefas.includes(campo.value)) {
      //SE EXISTE LISTA JÁ EXISTENTE
      msg.textContent = "Essa tarefa já existe";
      msg.style.color = "red";
    } else {
      tarefas.push(campo.value);
      let listasTarefas = document.querySelector(".itens-lista"); //UL DA LISTA
      listasTarefas.innerHTML = "";

      msg.textContent = "Tarefa adicionada";
      msg.style.color = "#1CCE3A";

      for (let i = 0; i < tarefas.length; i++) {
       
        ul.innerHTML = ` <li class="lista-item">
            <p class="texto-item">Estudar HTML</p>
                <div class="icons">
                  <i class="fa-solid fa-pen editar icon"></i>
                  <i class="fa-solid fa-trash apagar icon"></i>
                </div>
              </li>`

        campo.value = "";
        console.log(tarefas);
      }
    }
  }
}

function deletarTarefa() {
  const listasT = document.querySelector(".itens-lista");

  if (tarefas.length > 0) {
    listasT.innerHTML = ""; // limpa a lista visual
    tarefas.length = 0; // esvazia o array
    msg.textContent = "Tarefas apagadas com sucesso!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Nada a ser apagado";
    msg.style.color = "red";
  }
}

// function editarTarefa() {}

// function limparTarefas(lista) {}

function limparCampo() {
  campo.value = "";
  msg.textContent = "";
}
