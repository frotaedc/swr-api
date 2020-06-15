'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Route.get("setores", "SGCOR/Admin/pessoas/coger/setores/SetorController.index").prefix('v1')//.middleware(["auth", 'is:( admin or comissao )']);

// Route.group(() => {
//   Route.resource("diligencia", "SGCOR/Admin/procedimentos/2diligencia/DiligenciaController").apiOnly();
// }).prefix('v1/admin/procedimento')//.namespace('Admin')
//   .middleware(["auth", 'is:( admin or comissao )']); // implementando middleware e ACL
// }

require('./auth')
require('./admin')
