
async function register(data) {
  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const userMail = getUserByEmail(email)

  // Verificação se o email informado já foi utilizado por algum usuário.
  if (userMail) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar)

  // Cria o usuário no banco de dados
  const user = await createUser({ email, name, avatar: avatar2 })

  return { user }
}