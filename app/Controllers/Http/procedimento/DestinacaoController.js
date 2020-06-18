'use strict'

const Database = use('Database')
const Destinacao = use("App/Models/procedimento/destinacao/Destinacao");
const ProdutoDestinacao = use("App/Models/procedimento/destinacao/ProdutoDestinacao");

class DestinacaoController {

  async index({ request, response }) {
    const dados = await Destinacao.query()
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
    const trx = await Database.beginTransaction()
    try {
      const {
        data, hora, cliente_id, user_id, observacao, agendado, destinado,
        produto_id, quantidade, tipo_medida_id, preco
      } = request.all();
      let dadosDestinacao = await Destinacao.create({ data, hora, cliente_id, user_id, observacao, agendado, destinado }, trx);
      let dadosProduto = await ProdutoDestinacao.create({ destinacao_id: dadosDestinacao.id, produto_id, quantidade, tipo_medida_id, preco }, trx);

      await trx.commit()
      return response.status(201).send({ dadosDestinacao, dadosProduto })

    } catch (error) {
      await trx.rollback()
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
    let dados = await Destinacao.query()
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
    let dados = await Destinacao.findOrFail(params.id);
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
    const dados = await Destinacao.findOrFail(params.id);
    await dados.delete();
    return response.status(204).send()
  }
}

module.exports = DestinacaoController
