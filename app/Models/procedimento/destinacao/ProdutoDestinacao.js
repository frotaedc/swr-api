'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProdutoDestinacao extends Model {

    produto() {
        return this.belongsTo('App/Models/produto/Produto', 'produto_id', 'id')
    }

    tipo_medida() {
        return this.belongsTo('App/Models/produto/TipoMedida', 'tipo_medida_id', 'id')
    }
}

module.exports = ProdutoDestinacao
