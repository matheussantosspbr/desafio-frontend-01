const but = document.querySelector('#submit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

but.addEventListener('click', () => {
  let verificacaoUsername = removerTodosOsEspacos(username.value)
  let verificacaoPassword = removerTodosOsEspacos(password.value)

  // Validação para ver sse os campos está vazio
  if (verificacaoPassword.length == 0 || verificacaoUsername.length == 0) {
    alert('Não é permitido ter campos vazios')
  } else {
  }
})

function removerTodosOsEspacos(str) {
  let stringSemEspacos = str.replace(/ /gi, '')
  return stringSemEspacos
}
