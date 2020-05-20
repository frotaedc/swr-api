'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.table('produtos', (table) => {
      // alter table
      table.foreign('tipo_produto_id').references('id').inTable('tipo_produtos')
      table.foreign('tipo_medida_id').references('id').inTable('tipo_medidas')
    })
  }

  down () {
    this.table('produtos', (table) => {
      // reverse alternations
      table.dropForeign('tipo_produto_id')
      table.dropForeign('tipo_medida_id')
    })
  }
}

module.exports = ProdutoSchema
