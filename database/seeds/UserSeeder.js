'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const user = await User.create({
      nome: 'Administrador',
      cargo: 'Administrador',
      fone: '55555555',
      fone2: '55555555',
      cpf: '123.456.789-00',
      email: 'admin@admin.com',
      password: 'admin'
    })
  }
}

module.exports = UserSeeder
