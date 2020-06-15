'use strict'


const Database = use('Database')
const Cliente = use("App/Models/cliente/Cliente");

class ClienteController {

    async index({ request, response }) {
        const dados = await Cliente.query()
        // const usuario = await Database.table('users')
        .with('endereco')
        // .where('cpf', cpf)
        // .first()
        .fetch()
        // console.log(usuario)
        return response.send(dados)
    }

    async store({ request, response }) {
        try {
            const requests = request.all();
            let dados = await Cliente.create({ ...requests }); // usando o spred operator(desestruturação)
      
            // const topic = Ws.getChannel('canal:topico1').topic('canal:topico1')
            // if (topic) {
            //   topic.broadcast('message', 'Novo cliente cadastrado!')
            // }
            return response.status(201).send(dados)
      
          } catch (error) {
            return response.status(400).send({
              message: 'Erro ao processar a sua solicitação!'
            })
          }
    }

    async show({ params, response }) {
        let dados = await Cliente.query()
        // .with('protocolo.diligencia')
        .with('endereco')
        .where('id', params.id)
        .first()
      return response.send(dados)
    }

    async update({ params, request, response }) {
        let dados = await Cliente.findOrFail(params.id);
        const requests = request.all();
        dados.merge({ ...requests });
        await dados.save();
        return response.send(dados)
    }

    async destroy({ params, request, response }) {
        const dados = await Cliente.findOrFail(params.id);
        await dados.delete();
        return response.status(204).send()
    }
}

module.exports = ClienteController
