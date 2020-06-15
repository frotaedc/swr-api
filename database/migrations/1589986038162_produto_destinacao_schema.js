'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoDestinacaoSchema extends Schema {
  up () {
    this.create('produto_destinacaos', (table) => {
      table.increments()
      table.integer('destinacao_id').unsigned().notNullable();
      table.integer('produto_id').unsigned().notNullable();
      table.float('quantidade', 8, 2).notNullable(); // 8 é a quantidade total de dígitos
      table.integer('tipo_medida_id').unsigned();
      table.decimal('preco', 8, 2).notNullable(); // 2 é a quantidade de casas após a vírgula
      table.timestamps()
    })
  }

  down () {
    this.drop('produto_destinacaos')
  }
}

module.exports = ProdutoDestinacaoSchema
