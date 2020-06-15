'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Produto = use('App/Models/produto/Produto')

const produtos = [
{ nome: 'Óleo Vegetal', descricao: 'descricao do produto' },
{ nome: 'Óleo Mineral', descricao: 'descricao do produto' },
{ nome: 'Lâmpada', descricao: 'descricao do produto' },
{ nome: 'Pilha', descricao: 'descricao do produto' },
{ nome: 'Reator', descricao: 'descricao do produto' },
{ nome: 'Lixo Eletrônico Geral', descricao: 'descricao do produto' },
]
  
class ProdutoSeeder {
  async run () {

    for (let i = 0; i < produtos.length; i++) {
      await Produto.create(produtos[i])
    }
  }
}

module.exports = ProdutoSeeder
