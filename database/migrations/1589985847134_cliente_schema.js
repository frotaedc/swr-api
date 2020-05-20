'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 255).notNullable();
      table.string('cpf', 255)
      table.string('cnpj', 255)
      table.string('email', 255).notNullable();
      table.string('fone', 255).notNullable();
      table.string('fone2', 255)
      table.string('responsavel', 255)
      table.string('fone_resp', 255)
      table.string('tipo_cliente', 255).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
