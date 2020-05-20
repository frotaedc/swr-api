'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColetaSchema extends Schema {
  up () {
    this.create('coletas', (table) => {
      table.increments()
      table.datetime('data').notNullable();
      table.integer('cliente_id').unsigned();
      table.integer('user_id').unsigned(); // colaborador
      // table.integer('nota_id').unsigned(); // nota fiscal
      table.text('observacao').nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('coletas')
  }
}

module.exports = ColetaSchema
