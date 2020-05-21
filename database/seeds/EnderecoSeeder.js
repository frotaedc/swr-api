'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Endereco = use('App/Models/cliente/Endereco')

class EnderecoSeeder {
  async run () {
    await Endereco.create({
      endereco: 'Rua qualquer',
      numero: '456',
      bairro: 'Conceição',
      cidade: 'Porto Velho',
      estado: 'RO',
      cliente_id: 1
    })
  }
}

module.exports = EnderecoSeeder
