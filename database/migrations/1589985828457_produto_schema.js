'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome', 255).notNullable();
      table.string('descricao', 255).notNullable();
      // table.integer('tipo_produto_id').unsigned();
      // table.integer('tipo_medida_id').unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
