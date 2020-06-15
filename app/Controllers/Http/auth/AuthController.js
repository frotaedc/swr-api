'use strict'

const Database = use('Database')
const User = use("App/Models/User");

class AuthController {

  async register({ request, response }) {
    const trx = await Database.beginTransaction()
    try {
      const { nome, cargo, fone, fone2, cpf, email, password } = request.all();
      const user = await User.create({ nome, cargo, fone, fone2, cpf, email, password, status_acesso }, trx)
      // const userRole = await Role.findBy('slug', slug)
      // await user.roles().attach([userRole.id], null, trx)
      await trx.commit()

      // const topic = Ws.getChannel('canal:topico1').topic('canal:topico1')
      // if (topic) {
      //   topic.broadcast('message', 'Nova solicitação de acesso ao sistema!')
      // }

      //  --> aqui enviamos o e-mail para notificar os adms que um novo usuário solicitou acesso
      // nodemailer.createTransport(confignodemailer.config).sendMail({ from: "SGCOR <sgcor.sejus@outlook.com>",
      //   to: confignodemailer.to, // list of receivers
      //   subject: "Nova Solicitação de Cadastro", // Subject line // text: "Hello world?", // plain text body
      //   html: `<b>Segue os dados do solicitante:</b><br><p>
      //     <b>Nome:</b> ${nome},<br>
      //     <b>CPF:</b> ${cpf},<br>
      //     <b>E-mail:</b> ${email},<br>
      //     <b>Telefone 1:</b> ${telefone},<br>
      //     <b>Telefone 2:</b> ${telefone2},<br>
      //     <b>Tipo de Perfil:</b> ${slug},<br>
      //     <b>Id do Servidor:</b> ${serv.id},<br>
      //     <b>Matrícula:</b> ${matricula_serv},<br>
      //     <b>Cargo:</b> ${cargo_serv},<br>
      //     <b>Função:</b> ${funcao_serv},<br>
      //     <b>Admissão:</b> ${data_admissao_serv},<br>
      //     <b>Lotação na COGER:</b> ${data_entrada_serv},<br>
      //     <b>Setor Solicitado:</b> ${setor_id}`
      // }, (err, result) => {
      //   // if(err) return console.log(err)
      //   // console.log('mensagem enviada!!!!!!' + result)
      // })

      return response.status(201).send({ data: user })
    } catch (error) {
      await trx.rollback()
      return response.status(400).send({ message: 'Erro ao realizar cadastro!', error })
    }
  }

  async login({ request, response, auth }) {
    const { cpf, password } = request.all();
    const data = await auth.withRefreshToken().attempt(cpf, password)
    // const usuario = await User.query()
    const usuario = await Database.table('users')
    // .with('roles')
    // .where('cpf', cpf)
    .first()
    console.log(usuario)
    return response.send({ data, user: usuario })
  }

  async refresh({ request, response, auth }) { // geração de um novo token em cada autenticação, é uma segurança a mais
    var refresh_token = request.input('refresh_token')
    if(!refresh_token) {
      refresh_token = request.header('refresh_token')
    }
    const user = await auth.newRefreshToken().generateForRefreshToken(refresh_token)
    return response.send({ data: user })
  }

  async logout({ request, response, auth }) { // recebe o refresh_token para invalida-lo
    let refresh_token = request.input('refresh_token')
    if(!refresh_token) {
      refresh_token = request.header('refresh_token')
    }
    await auth.authenticator('jwt').revokeTokens([refresh_token], true) // o true deleta o token velho da base de dados
    return response.status(204).send({})
  }

  async forgot({ request, response }) { // método q envia o email de recuperação de senha
    //
  }

  async remember({ request, response }) {
    //
  }

  async reset({ request, response }) {
    //
  }

}

module.exports = AuthController
