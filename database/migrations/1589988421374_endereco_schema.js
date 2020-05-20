'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.table('enderecos', (table) => {
      // alter table
      table.foreign('cliente_id').references('id').inTable('clientes')
    })
  }

  down () {
    this.table('enderecos', (table) => {
      // reverse alternations
      table.dropForeign('cliente_id')
    })
  }
}

module.exports = EnderecoSchema
