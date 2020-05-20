'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoProdutoSchema extends Schema {
  up () {
    this.create('tipo_produtos', (table) => {
      table.increments()
      table.string('nome_tipo', 120).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_produtos')
  }
}

module.exports = TipoProdutoSchema
