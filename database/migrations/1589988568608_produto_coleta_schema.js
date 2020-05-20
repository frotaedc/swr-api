'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoColetaSchema extends Schema {
  up () {
    this.table('produto_coletas', (table) => {
      // alter table
      table.foreign('coleta_id').references('id').inTable('coletas')
      table.foreign('produto_id').references('id').inTable('produtos')
    })
  }

  down () {
    this.table('produto_coletas', (table) => {
      // reverse alternations
      table.dropForeign('coleta_id')
      table.dropForeign('produto_id')
    })
  }
}

module.exports = ProdutoColetaSchema
