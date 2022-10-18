const body = document.querySelector('body')
const but = document.querySelector('#submit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const msgErroDiv = document.querySelector('.msgErro')

but.addEventListener('click', e => {
  // Para a tela não recarregar
  e.preventDefault()

  // Para caso ter alguma class, remover
  body.classList.remove('showError')
  body.classList.remove('showSucess')

  let msgErro = ''
  let verificacaoUsername = removerTodosOsEspacos(username.value)
  let verificacaoPassword = removerTodosOsEspacos(password.value)

  // Validação para ver se os campos está vazio
  if (verificacaoPassword.length == 0 || verificacaoUsername.length == 0) {
    msgErro = 'Não é permitido ter campos vazios'
  } else {
    // Validação se as credenciais são iguais
    if (!(password.value == username.value)) {
      msgErro = 'As credenciais não se coincidem'
    }
  }

  let verificacaoErro = removerTodosOsEspacos(msgErro)

  //Validação de Erro
  if (verificacaoErro == 0) {
    // Mostrar Mensagem de Logado
    body.classList.add('showSucess')
  } else {
    // Mostrar Erro
    body.classList.add('showError')
    msgErroDiv.innerHTML = msgErro

    // Limpar os campos
    username.innerHTML = ''
    password.innerHTML = ''
  }
})

function removerTodosOsEspacos(str) {
  let stringSemEspacos = str.replace(/ /gi, '')
  return stringSemEspacos
}
