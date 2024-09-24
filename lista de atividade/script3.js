document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

//inicializar uma lista vazia

//verificar se existe uma lista no local storage

//fazer uma laço for pra cada tarefa, chamar uma funçao addTarefa

//quando add uma tarefa, add no local storag também

//quando remover uma tarefa, remover do local storage também

let lista_tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

lista_tarefas.forEach(element => {
    criarElemento(element)
    
});



function addTarefa(){
    //pegar o valor de dentro do input e armazenar em uma variavel
    const inputTarefa = document.getElementById('input_tarefa').value
    //verificar o valor do input e dar um alert se estiver vazio
    if (!inputTarefa) {
        alert('o input esta vazio')
        return
    }
    if (lista_tarefas.includes (inputTarefa)) {
        alert('não pode repitir')
        return
    }
    // adiciona tarefa no array de tarefas
    lista_tarefas.push(inputTarefa)

    //tranforma o array em string e coloca a lista de tarefas no local storage
    localStorage.setItem('tarefas', JSON.stringify(lista_tarefas))
    criarElemento(inputTarefa)
}

    function criarElemento(inputTarefa){
        document.getElementById('input_tarefa').value = ""
        //criar o elemento <li>
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'
    //adicionar o texto do input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa
    //adicionar um botão para deletar tarefa no novo <li>
    const botaoDeletar = document.createElement('button')

    botaoDeletar.textContent = 'Deletar Tarefa'
    botaoDeletar.addEventListener('click', () => {
        //remove a tarefa da tela
        elemento_tarefa.remove()
        //filtra a tarefa a ser removida
        lista_tarefas = lista_tarefas.filter((tarefa) => tarefa !== inputTarefa)
        // salva novamente a lista de tarefas no local storage
        localStorage.setItem('tarefas', JSON.stringify(lista_tarefas))
    })
    //adicionar um botão para completar a tarefa no <li>
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent = 'completar tarefa'
    botaoCompletar.addEventListener('click', () => {
        conteudoTarefa.classList.toggle('completada')
    })
    //adicionar um novo elemento <li> a tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById('lista_tarefas').appendChild(elemento_tarefa)
}




