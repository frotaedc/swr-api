'use strict'

const Database = use('Database')
const ModeldoController = use("App/Models/procedimento/coleta/Coleta");
const ProdutoColeta = use("App/Models/procedimento/coleta/ProdutoColeta");


class ColetaController {

  async index({ request, response }) {
    const dados = await ModeldoController.query()
      // const usuario = await Database.table('users')
      .with('funcionario')
      .with('cliente')
      .with('produto_coleta')
      .with('produto_coleta.produto')
      .with('produto_coleta.tipo_medida')
      // .first()
      .fetch()
    return response.send(dados)
  }

  async store({ request, response }) {
    try {
      const requests = request.all();
      let dados = await ModeldoController.create({ ...requests }); // usando o spred operator(desestruturação)

      // const topic = Ws.getChannel('canal:topico1').topic('canal:topico1')
      // if (topic) {
      //   topic.broadcast('message', 'Novo produto cadastrado!')
      // }
      return response.status(201).send(dados)

    } catch (error) {
      return response.status(400).send({
        message: 'Erro ao processar a sua solicitação!'
      })
    }
  }

  async store_coleta_produto({ request, response }) {
    try {
      const requests = request.all();
      let dados = await ProdutoColeta.create({ ...requests }); // usando o spred operator(desestruturação)
      return response.status(201).send(dados)
    } catch (error) {
      return response.status(400).send({
        message: 'Erro ao processar a sua solicitação!'
      })
    }
  }

  async show({ params, response }) {
    let dados = await ModeldoController.query()
      .with('funcionario')
      .with('cliente')
      .with('produto_coleta')
      .with('produto_coleta.produto')
      .with('produto_coleta.tipo_medida')
      .where('id', params.id)
      .first()
    return response.send(dados)
  }

  async update({ params, request, response }) {
    let dados = await ModeldoController.findOrFail(params.id);
    const requests = request.all();
    dados.merge({ ...requests });
    await dados.save();
    return response.send(dados)
  }

  async update_coleta_produto({ params, request, response }) {
    let dados = await ProdutoColeta.findOrFail(params.id);
    const requests = request.all();
    dados.merge({ ...requests });
    await dados.save();
    return response.send(dados)
  }

  async destroy({ params, request, response }) {
    const dados = await ModeldoController.findOrFail(params.id);
    await dados.delete();
    return response.status(204).send()
  }

}

module.exports = ColetaController
