import ServeRestApi from "../API/ServeRestApi_API";
describe('Aplicacao serveRest API Usuarios', () => {

    beforeEach(() => {
        // necessario pegar uma nova senha a cada execução nao consegui gerar usuarui e recuperar o mesmo
        const emailLogin = 'mike.inspedeerr@gmail.com'
        const senhaLogin = '123@'
        ServeRestApi.login(emailLogin,senhaLogin);

    });

    it('Validar - Listar usuarios cadastrados', () => {
        ServeRestApi.listarUsuariosCadastrados();

    });


    it('Validar - Cadastro de novos usuarios', () => {
        ServeRestApi.cadastrarUsuario()

    });

    it('Validar - Buscar usuario por ID', () => {
        ServeRestApi.buscarUsuarioId()

    });

    it('Validar - Editar usuario por Id', () => {
        const numeroAleatorio = Math.floor(Math.random() * 10001);
        const email = `Mike.inspeferreira${numeroAleatorio}@gmail.com`;
        const msgEdit = 'Registro alterado com sucesso';
        ServeRestApi.editarUsuarioId(email, msgEdit)

    });

    it('Validar - deletar usuario por ID', () => {
        const msgDelete = 'Registro excluído com sucesso'
        ServeRestApi.excluirUsuario(msgDelete)

    });


    describe('Aplicacao serveRest API Produtos', () => {

        it('Validar - Listar Produtos cadastrados', () => {
            ServeRestApi.listarProdutosCadastrados();
        });

        it('Validar - Cadastrar Produto', () => {
            const numeroAleatorio = Math.floor(Math.random() * 10001);
            const produtoCadastro = `mangueira de ${numeroAleatorio}M `
            ServeRestApi.cadastrarProduto(produtoCadastro);
        });

        it('Validar - Cadastrar Produto', () => {
            ServeRestApi.buscarProdutoId()
        });

        it('Validar - Editar Produto', () => {
            const numeroAleatorio = Math.floor(Math.random() * 10001);
            const produtoEdit = `mangueira de ${numeroAleatorio}M `
            ServeRestApi.editarProduto(produtoEdit)
        });

        it('Validar - Deletar Produto', () => {
            ServeRestApi.deletarProduto()
        });

    });

    describe('Aplicacao ServeRest API Carrinho', () => {

        it('Validar - Listar carrinhos cadastrados', () => {
            ServeRestApi.listarCarrinhos()
        });

        it('Validar - Cadastrar carrinhos', () => {
            ServeRestApi. excluirCarrinho()
            ServeRestApi.cadastrarCarrinho()
        });


        it('Validar - Buscar carrinho por Id', () => {
            ServeRestApi.buscarCarrimhoId()
        });

       
        it('Validar - Excluir Carrinho', () => {
            ServeRestApi. excluirCarrinho()
        });

        it('Validar - Cancelar compra', () => {
            ServeRestApi.cancelarCompra()
        });

        

        







    })










});