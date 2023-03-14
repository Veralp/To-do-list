const corpo = document.querySelector('#corpo')
const trModel = document.querySelector('.trModel')

const log = (str) => {
  console.log(str)
}

function carregarTarefas() {
  const options = { method: 'GET' };
  fetch('http://localhost:3000/tarefa/listar', options)
    .then(response => response.json())
    .then(response => {
      mostrarTarefas(response)
    })
}

carregarTarefas()


function mostrarTarefas(vetor) {
  vetor.forEach(e => {
    let dados = {
      data: e.data,
      id: e.id,
      status: e.status,
      tarefa: e.tarefa
    }
    const tr = trModel.cloneNode(true)
    tr.classList.remove('trModel')
    log(tr)
    let col1 = document.createElement('td')
    let col2 = document.createElement('td')
    let col3 = document.createElement('td')
    let buttons = tr.querySelectorAll('.btn-action')

    buttons[0].querySelector('span').setAttribute('onclick', `excluirItem('${e.id}')`)
    col1.innerHTML = dados.tarefa
    col2.innerHTML = dados.data
    col3.innerHTML = dados.status
    tr.appendChild(col1)
    tr.appendChild(col2)
    tr.appendChild(col3)
    corpo.appendChild(tr)
  });
}
