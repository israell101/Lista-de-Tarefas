let campo = document.querySelector(".campo");//INPUT

let listasTarefas = document.querySelector(".items-lista");

const adicionar = document.querySelector(".adicionarTarefa");
const limpar = document.querySelector(".apagarCampo");

const editar = document.querySelector(".editar");//TAREFA
const apagar = document.querySelector(".apagar");//TAREFA

const tarefas = []

adicionar.addEventListener("click", adicionarTarefa);
limpar.addEventListener("click", limparCampo);
editar.addEventListener("click", editarTarefa);
apagar.addEventListener("click", deletarTarefa);

function adicionarTarefa(){
    tarefas.push(campo.value)
    console.log(tarefas)

    novaTarefa = document.createElement("li")//li é o elemento
    novaTarefa.classList.add("lista-item");
    listasTarefas.appendChild(novaTarefa) //lista é o pai
    novaTarefa.textContent = campo.value


    campo.value = ""
}

function deletarTarefa() {

    console.log(tarefas);
}

function editarTarefa() {

    console.log(tarefas);
}

function limparCampo() {
    campo.value = ""
}