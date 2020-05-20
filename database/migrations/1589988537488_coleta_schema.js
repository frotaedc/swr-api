'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColetaSchema extends Schema {
  up () {
    this.table('coletas', (table) => {
      // alter table
      table.foreign('cliente_id').references('id').inTable('clientes')
      table.foreign('user_id').references('id').inTable('users')
      // table.foreign('nota_id').references('id').inTable('notas')
    })
  }

  down () {
    this.table('coletas', (table) => {
      // reverse alternations
      table.dropForeign('cliente_id')
      table.dropForeign('user_id')
      // table.dropForeign('nota_id')
    })
  }
}

module.exports = ColetaSchema
