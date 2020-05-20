'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotaSchema extends Schema {
  up () {
    this.create('notas', (table) => {
      table.increments()
      table.date('data').notNullable();
      table.string('numero', 255).nullable();
      table.string('nome_arquivo', 255).nullable();
      table.string('url', 255).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('notas')
  }
}

module.exports = NotaSchema
