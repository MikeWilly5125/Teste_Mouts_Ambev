import SeveRest from "../pages/SeveRest_page";
describe('Aplicacao Serve Rest Web', () => {

  beforeEach(() => {
    cy.visit('/')
    SeveRest.login();

  });

  it('Validar - logout', () => {
    SeveRest.logOut();

  });

  it('Validar - login email invalido', () => {
    cy.reload();
    SeveRest.loginEmailInvalido();

  });

  it('Validar - login senha invalida', () => {
    cy.reload();
    SeveRest.loginSenhaInvalida();

  });

  it('Validar - Navegação', () => {
    SeveRest.btsNavegacao();

  });

  it('Validar - Criação de Produto perfil ADM', () => {
    SeveRest.cadastrarProdutoADM()

  });

  it('Validar - Pesquisa de produto', () => {
    SeveRest.buscaProduto();

  });

  it('Validar - Pesquisa de produto não existente', () => {
    const msgProduto = 'Nenhum produto foi encontrado'
    SeveRest.buscaProdutoNaoExistente(msgProduto);

  });

  it('Validar - Conteudo do produto', () => {
    SeveRest.buscaProduto();
    SeveRest.conteudoProduto();
  });

  it('Validar - Adicionar produto a lista', () => {
    SeveRest.buscaProduto();
    SeveRest.adicionarProdutoLista()
  });

  it('Validar - Adicionar Produto ao carrinho', () => {
    SeveRest.buscaProduto();
    SeveRest.adicionarProdutoLista();
    SeveRest.adicionarProdutoCarrinho();

  });

  it('Validar - Limpar Lista', () => {
    SeveRest.buscaProduto();
    SeveRest.adicionarProdutoLista();
    const msgCarrinho = 'Seu carrinho está vazio';
    SeveRest.limparLista(msgCarrinho);
  });

  it('Validar - Retornar a pagina inicial', () => {
    SeveRest.buscaProduto();
    SeveRest.adicionarProdutoLista();
    SeveRest.retornarHome();
  });


});

describe('Aplicacao Serve Rest Cadastro', () => {
  

  it('Validar - Cadastro', () => {
    cy.reload()
    cy.visit('/');
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nome = 'Mike Willy'
    const email = `Mike.inspeferreira${numeroAleatorio}@gmail.com`; //usar faker.js
    const senha = Cypress.env('password')
    const msgCadastro = 'Cadastro realizado com sucesso';
    SeveRest.cadastro(nome, email, senha, msgCadastro);

  });

  it('Validar - Cadastro email repetido', () => {
    cy.visit('/');
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nome = 'Mike Willy'
    const email = `Mike.inspeferreira${numeroAleatorio}@gmail.com`;
    const senha = Cypress.env('password');
    const msgCadastro = 'Este email já está sendo usado';
    SeveRest.cadastroEmailRepetido(nome, email, senha, msgCadastro);

  });


});

