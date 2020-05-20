'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.string('endereco', 255).notNullable();
      table.string('numero', 255).notNullable();
      table.string('bairro', 255).notNullable();
      table.string('cidade', 255).notNullable();
      table.string('estado', 255).notNullable();
      table.integer('cliente_id').unsigned();
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema
