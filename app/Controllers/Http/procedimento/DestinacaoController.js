'use strict'

const ModeldoController = use("App/Models/procedimento/destinacao/Destinacao");
const ProdutoDestinacao = use("App/Models/procedimento/destinacao/ProdutoDestinacao");

class DestinacaoController {

  async index({ request, response }) {
    const dados = await ModeldoController.query()
      // const usuario = await Database.table('users')
      .with('funcionario')
      .with('cliente')
      .with('produto_destinacao')
      .with('produto_destinacao.produto')
      .with('produto_destinacao.tipo_medida')
      .with('nota_fiscal')
      // .where('cpf', cpf)
      // .first()
      .fetch()
    // console.log(usuario)
    return response.send(dados)
  }

  async store({ request, response }) {
    try {
      const requests = request.all();
      let dados = await ModeldoController.create({ ...requests }); // usando o spred operator(desestruturação)
      return response.status(201).send(dados)

    } catch (error) {
      return response.status(400).send({
        message: 'Erro ao processar a sua solicitação!'
      })
    }
  }

  async store_destinacao_produto({ request, response }) {
    try {
      const requests = request.all();
      let dados = await ProdutoDestinacao.create({ ...requests }); // usando o spred operator(desestruturação)
      return response.status(201).send(dados)
    } catch (error) {
      return response.status(400).send({
        message: 'Erro ao processar a sua solicitação!'
      })
    }
  }

  async show({ params, response }) {
    let dados = await ModeldoController.query()
      // .with('protocolo.diligencia')
      .with('funcionario')
      .with('cliente')
      .with('produto_destinacao')
      .with('produto_destinacao.produto')
      .with('produto_destinacao.tipo_medida')
      .with('nota_fiscal')
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

  async update_destinacao_produto({ params, request, response }) {
    let dados = await ProdutoDestinacao.findOrFail(params.id);
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

module.exports = DestinacaoController
