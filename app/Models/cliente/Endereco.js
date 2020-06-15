'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Endereco extends Model {

    cliente() {
        return this.belongsTo('App/Models/cliente/Cliente', 'cliente_id', 'id')
    }
}

module.exports = Endereco
