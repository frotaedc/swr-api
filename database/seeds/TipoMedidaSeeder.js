'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TipoMedida = use('App/Models/produto/TipoMedida')

const tipos = [
  'Kg',
  'Ton.',
  'Lt',
  'Mt²',
  'Mt³',
]

class TipoMedidaSeeder {

  async run () {
    for (let i = 0; i < tipos.length; i++) {
      await TipoMedida.create({
        nome_tipo: tipos[i]
      })
    }
  }
}

module.exports = TipoMedidaSeeder
