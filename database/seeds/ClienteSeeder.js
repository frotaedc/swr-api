'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Cliente = use('App/Models/cliente/Cliente')

class ClienteSeeder {
  async run () {

    await Cliente.create({
      nome: 'Cliente 1',
      cpf: '548.456.789-00',
      cnpj: '12356.456.789-0001',
      email: 'cliente1@timedev.com',
      fone: '55555555',
      fone2: '55555555',
      responsavel: 'Fulano de tal',
      fone_resp: '55555555',
      tipo_cliente: 'coleta'
    })
  }
}

module.exports = ClienteSeeder
