// Obtém o botão "Adicionar uma tarefa"
const addTaskButton = document.querySelector("#add-button");

// Obtém o elemento da lista de tarefas
const taskList = document.querySelector("#task-list");

// Adiciona um evento de clique ao botão "Adicionar uma tarefa"
addTaskButton.addEventListener("click", function () {
    // Cria um novo elemento da tarefa
    const task = document.createElement("div");
    task.classList.add("note-line");
    task.innerHTML = `
    <input class="check" type="checkbox" name="done" id="checked">
    <input type="text" name="task" id="tasks">
    <button class="w3-button w3-black w3-round-small">Deletar</button>
  `;

    // Adiciona a tarefa à lista
    taskList.appendChild(task);

    // Adiciona um evento de clique ao botão "deletar"
    task.querySelector("button").addEventListener("click", function () {
        task.remove();
    });
});


