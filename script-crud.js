// encontrar o botão add tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const itemListaTarefa = document.querySelector('.app__section-active-task-description');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden'); //alteranando o comportamento da classe hidden
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); //mudando comportamento padrão do submit no textArea
    const tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // conversão em string
    itemListaTarefa.textContent = `${localStorage.getItem(tarefas[0])}`;
})