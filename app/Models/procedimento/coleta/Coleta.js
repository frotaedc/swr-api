'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coleta extends Model {

    cliente() {
        return this.belongsTo('App/Models/cliente/Cliente', 'cliente_id', 'id')
    }

    funcionario() {
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }

    produto_coleta() {
        return this.hasMany('App/Models/procedimento/coleta/ProdutoColeta', 'id', 'coleta_id')
    }
}

module.exports = Coleta
