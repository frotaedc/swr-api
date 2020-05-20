'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoDestinacaoSchema extends Schema {
  up () {
    this.table('produto_destinacaos', (table) => {
      // alter table
      table.foreign('destinacao_id').references('id').inTable('destinacaos')
      table.foreign('produto_id').references('id').inTable('produtos')
    })
  }

  down () {
    this.table('produto_destinacaos', (table) => {
      // reverse alternations
      table.dropForeign('destinacao_id')
      table.dropForeign('produto_id')
    })
  }
}

module.exports = ProdutoDestinacaoSchema
