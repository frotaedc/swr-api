'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Destinacao extends Model {

    cliente() {
        return this.belongsTo('App/Models/cliente/Cliente', 'cliente_id', 'id')
    }

    funcionario() {
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }

    produto_destinacao() {
        return this.hasMany('App/Models/procedimento/destinacao/ProdutoDestinacao', 'id', 'destinacao_id')
    }

    nota_fiscal() {
        return this.belongsTo('App/Models/procedimento/destinacao/Nota', 'nota_id', 'id')
    }
}

module.exports = Destinacao
