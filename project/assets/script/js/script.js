const but = document.querySelector('#submit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

but.addEventListener('click', () => {
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

  //Validação de Erro
  if (!msgErro) {
    alert('está ok')
  } else {
    alert(msgErro)
  }
})

function removerTodosOsEspacos(str) {
  let stringSemEspacos = str.replace(/ /gi, '')
  return stringSemEspacos
}
