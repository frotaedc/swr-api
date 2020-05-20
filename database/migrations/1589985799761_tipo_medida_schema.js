'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoMedidaSchema extends Schema {
  up () {
    this.create('tipo_medidas', (table) => {
      table.increments()
      table.string('nome_tipo', 120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_medidas')
  }
}

module.exports = TipoMedidaSchema
