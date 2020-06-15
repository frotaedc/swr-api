'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoColetaSchema extends Schema {
  up () {
    this.table('produto_coletas', (table) => {
      // alter table
      table.foreign('coleta_id').references('id').inTable('coletas')
      table.foreign('produto_id').references('id').inTable('produtos')
      table.foreign('tipo_medida_id').references('id').inTable('tipo_medidas')
    })
  }

  down () {
    this.table('produto_coletas', (table) => {
      // reverse alternations
      table.dropForeign('coleta_id')
      table.dropForeign('produto_id')
      table.dropForeign('tipo_medida_id')
    })
  }
}

module.exports = ProdutoColetaSchema
