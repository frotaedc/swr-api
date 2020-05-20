'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoColetaSchema extends Schema {
  up () {
    this.create('produto_coletas', (table) => {
      table.increments()
      table.integer('coleta_id').unsigned().notNullable();
      table.integer('produto_id').unsigned().notNullable();
      table.float('quantidade', 8, 2).notNullable();
      table.decimal('custo', 8, 2).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('produto_coletas')
  }
}

module.exports = ProdutoColetaSchema
