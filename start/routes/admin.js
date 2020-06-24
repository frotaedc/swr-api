'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Routes de admin
// Route.get('mensagem', 'ChatController.mensagem').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// Route.get('usuarios', 'UserController.index').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// Route.get('roles', 'UserController.index_roles').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// Route.put('usuarios/ativacao/:id', 'UserController.handle_config_ativacao').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// Route.put('usuarios/perfil/:id', 'UserController.handle_config_perfil').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// Route.put('servidor/setor/:id', 'UserController.handle_setor_servidor').prefix('v1/admin').middleware(['auth', 'is:( admin )']);
// // Route.get('index_dashboard', 'SGCOR/Admin/DashboardController.index').prefix('v1/admin').middleware(["auth", 'is:( admin or comissao )']); // implementando middleware e ACL
// Route.get('index_dashboard', 'SGCOR/Admin/DashboardController.index').prefix('v1/admin').middleware(['auth', 'is: ( admin or comissao )']); // implementando middleware e ACL
// Route.get("cidades", "CidadeController.index").prefix('v1').middleware(["auth", 'is:( admin or comissao )']);
// Route.get("setores", "SGCOR/Admin/pessoas/coger/setores/SetorController.index").prefix('v1')//.middleware(["auth", 'is:( admin or comissao )']);

Route.group(() => {

    Route.resource("cliente", "cliente/ClienteController").apiOnly()//.except("update");
    Route.resource("produto", "produto/ProdutoController").apiOnly()//.except("update");
    Route.get("medidas", "produto/ProdutoController.medidas")
    Route.resource("coleta", "procedimento/ColetaController").apiOnly()//.except("update");
    Route.post("coleta_produto", "procedimento/ColetaController.store_coleta_produto");
    Route.put("coleta_produto/:id", "procedimento/ColetaController.update_coleta_produto");
    Route.resource("destinacao", "procedimento/DestinacaoController").apiOnly()//.except("update");
    Route.post("destinacao_produto", "procedimento/DestinacaoController.store_destinacao_produto");
    Route.put("destinacao_produto/:id", "procedimento/DestinacaoController.update_destinacao_produto");

}).prefix('v1/admin').middleware(['auth'])//.namespace('auth')