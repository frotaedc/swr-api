'use strict'

const User = use("App/Models/User");
class UserController {

    async index({ request, response }) {
        const dados = await User.query()
          // .first()
          .fetch()
        return response.send(dados)
      }
}

module.exports = UserController
