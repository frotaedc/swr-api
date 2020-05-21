'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TipoProduto = use('App/Models/produto/TipoProduto')

const tipos = [
  'Óleo Vegetal',
  'Óleo Mineral',
  'Lâmpada',
  'Pilha',
  'Reator',
  'Lixo Eletrônico Geral',
]

class TipoProdutoSeeder {
  async run () {
    for (let i = 0; i < tipos.length; i++) {
      await TipoProduto.create({
        nome_tipo: tipos[i]
      })
    }
  }
}

module.exports = TipoProdutoSeeder
