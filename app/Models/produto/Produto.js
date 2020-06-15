'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {

    // tipo_medida() {
    //     return this.belongsTo('App/Models/produto/TipoMedida', 'tipo_medida_id', 'id')
    // }
}

module.exports = Produto
