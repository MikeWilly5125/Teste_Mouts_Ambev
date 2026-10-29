require('dotenv').config()

const campoEmail = '[data-testid="email"]';
const campoSenha = '[data-testid="senha"]';
const btEntrar = '[data-testid="entrar"]';
const btLogOut = '[data-testid="logout"]';

const linkCadastre = '[data-testid="cadastrar"]';
const campoCadastroNome = '[data-testid="nome"]';
const campoCadastroEmail = '[data-testid="email"]'
const campoCadastroSenha = '[data-testid="password"]';
const btCadastrar = '[data-testid="cadastrar"]';

const campoNomeProduto = '[data-testid="nome"]';
const campoprecoProduto = '[data-testid="preco"]';
const campoquantProduto = '[data-testid="quantity"]';
const campodescricaoProduto = '[data-testid="descricao"]';
const btCadastrarProduto = '[data-testid="cadastarProdutos"]';

const btNavegaHome = '[data-testid="home"]';
const btNavegaListaCompra = '[data-testid="lista-de-compras"]';
const btNavegaCarrinho = '[data-testid="carrinho"]';

const CampoBuscaProduto = '[data-testid="pesquisar"]';
const btPesquisar = '[data-testid="botaoPesquisar"]';

const btAdicionarLista = '[data-testid="adicionarNaLista"]';

const btPaginaInicial = '[data-testid="paginaInicial"]';
const btAdicionarCarrinho = '[data-testid="adicionar carrinho"]';
const btLimparLista = '[data-testid="limparLista"]';


let texto
class SeveRest_page {

     login() {
          cy.get(campoEmail).type(Cypress.env('username')).should('be.visible')
               .and('be.enabled');
          cy.get(campoSenha).type(Cypress.env('password')).should('be.visible')
               .and('be.enabled');
          cy.get(btEntrar).click().should('be.visible');
          cy.wait(1000);

          // cy.get('.jumbotron').invoke('text').then(val => {
          //      // Email/senhainvalida = Cadastrar
          //      if (val.includes('Email e/ou senha inválidos')) {
          //           this.cadastroPadrao();
          //           cy.visit('/');
          //      }

          // });

          cy.visit('/');
          cy.get(campoEmail).type(Cypress.env('username')).should('be.visible')
               .and('be.enabled');
          cy.get(campoSenha).type(Cypress.env('password')).should('be.visible')
               .and('be.enabled');
          cy.get(btEntrar).click().should('be.visible');


     };

     cadastroPadrao() {
          cy.get(linkCadastre, { timeout: 1000 }).should('be.visible').click();

          cy.get(campoCadastroNome).type('Mike Willy').should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroEmail).type(Cypress.env('username')).should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroSenha).type(Cypress.env('password')).should('be.visible')
               .and('be.enabled');

          cy.get(btCadastrar).should('be.visible')
               .and('be.enabled').click()


          // cy.get('.alert-link').contains('Cadastro realizado com sucesso').should('have.text', msgCadastro)

     };

     cadastro(nome, email, senha, msgCadastro) {
          cy.get(linkCadastre, { timeout: 1000 }).should('be.visible').click();

          cy.get(campoCadastroNome).type(nome).should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroEmail).type(email).should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroSenha).type(senha).should('be.visible')
               .and('be.enabled');

          cy.get(btCadastrar).should('be.visible')
               .and('be.enabled').click()

          cy.get('.alert-link').contains('Cadastro realizado com sucesso').should('have.text', msgCadastro)

     };

     cadastroEmailRepetido(nome, email, senha, msgCadastro) {
          Cypress._.times(2, (index) => {

               cy.get(linkCadastre, { timeout: 1000 }).should('be.visible').click();

               cy.get(campoCadastroNome).type(nome).should('be.visible')
                    .and('be.enabled');
               cy.get(campoCadastroEmail).type(email).should('be.visible')
                    .and('be.enabled');
               cy.get(campoCadastroSenha).type(senha).should('be.visible')
                    .and('be.enabled');

               cy.get(btCadastrar).should('be.visible')
                    .and('be.enabled').click()

          });

          cy.get('.alert').contains('Este email já está sendo usado').should('have.text', msgCadastro)

     };

     logOut() {
          cy.get(btLogOut).click();
          cy.get(btEntrar, { timeout: 1000 }).click().should('be.visible');

     };

     loginEmailInvalido() {
          cy.get(campoEmail).type('ABCD@gmail.com').should('be.visible')
          cy.get(campoSenha).type(Cypress.env('password')).should('be.visible')
               .and('be.enabled');
          cy.get(btEntrar).click().should('be.visible');

          cy.get('.alert').should('be.visible');

     };

     loginSenhaInvalida() {
          cy.get(campoEmail).type(Cypress.env('username')).should('be.visible')
               .and('be.enabled');
          cy.get(campoSenha).type('ABCD123456').should('be.visible')
               .and('be.enabled');
          cy.get(btEntrar).click().should('be.visible');
          cy.get('.alert').should('be.visible');

     }

     btsNavegacao() {
          cy.get(btNavegaHome, { timeout: 1000 }).click();
          cy.url().should('include', 'home');

          cy.get(btNavegaListaCompra, { timeout: 300 }).click();
          cy.url().should('include', 'minhaListaDeProdutos');

          cy.get(btNavegaCarrinho, { timeout: 300 }).click()
          cy.url().should('include', 'carrinho');

     }

     buscaProduto() {
          cy.wait(200);
          cy.url().should('include', 'home');
          const produtos = ['Ergonomic Plastic Bacon', 'Tasty Frozen Car', 'Oriental Steel Shirt', 'Awesome Granite Towels', 'Unbranded Concrete Pizza'];
          const produtoSorteado = produtos[Math.floor(Math.random() * produtos.length)];
     
          cy.get(CampoBuscaProduto).type('carro').should('be.visible')
               .and('be.enabled');

          cy.get(btPesquisar).click().should('be.visible');

          cy.wait(1000)
          cy.get('.jumbotron').invoke('text').then(val => {
               // Produto Nao encontrado = Cadastrar
               console.log(val)
               if (val.includes('Nenhum produto foi encontrado')) {
                    this.cadastrarProdutoADM()

               }

          });

     };

     cadastrarProdutoADM() {
          const numeroAleatorio = Math.floor(Math.random() * 10001);
          const nome = 'Mike Willy'
          const email = `Mike.inspeferreira${numeroAleatorio}@gmail.com`; //usar faker.js
          const senha = Cypress.env('password')

          cy.visit('/')
          cy.get(linkCadastre, { timeout: 1000 }).should('be.visible').click();

          cy.get(campoCadastroNome).type('Mike Willy').should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroEmail).type(email).should('be.visible')
               .and('be.enabled');
          cy.get(campoCadastroSenha).type(Cypress.env('password')).should('be.visible')
               .and('be.enabled');
          cy.get('[data-testid="checkbox"]').click();

          cy.get(btCadastrar,{timeout:1000}).should('be.visible')
               .and('be.enabled').click()
    
          // Cadasrar
          cy.wait(1000)
          cy.get('[data-testid="cadastrarProdutos"]').click();

          cy.get(campoNomeProduto).type('carro');
          cy.get(campoprecoProduto).type(1234);
          cy.get(campodescricaoProduto).type('Televisao de plasma');
          cy.get(campoquantProduto).type(3);
          cy.get(btCadastrarProduto).click()

     }

     buscaProdutoNaoExistente(msgProduto) {
          cy.url().should('include', 'home');

          cy.get(CampoBuscaProduto).type('Bola Quadrada').should('be.visible')
               .and('be.enabled');
          cy.get(btPesquisar).click().should('be.visible');

          cy.get('p').should('have.text', msgProduto)

     }

     conteudoProduto() {
          cy.get('.card', {timeout:1000}).invoke('text').then(val => {
               cy.wrap(val).should('include', 'Preço: $')

          });

          cy.get('.card').invoke('text').then(val => {
               let text = val.replace('Produto:', '')
                    .replace(/Preço.*/i, '').trim();
               text = texto

          }).as('PRODUTO')

          cy.get(':nth-child(1) > .imagem')
               .should('exist')
               .and('be.visible');

     };

     adicionarProdutoLista() {
          cy.get(btAdicionarLista).should('exist')
               .and('be.visible');
          cy.get(btAdicionarLista).click()
          cy.url().should('include', 'minhaListaDeProdutos');

          cy.get('.card-body').invoke('text').then(val => {
               let produtoLista = val.replace('Produto:', '')
                    .replace(/Preço.*/i, '').trim();

               // cy.get("@PRODUTO").should('include', produtoLista)

          })

     };

     adicionarProdutoCarrinho() {
          cy.get(btAdicionarCarrinho, { timeout: 300 }).click();
          cy.url().should('include', 'carrinho');

          //   Modulo de carrinho esta em construção.
     };

     limparLista(msgCarrinho) {
          cy.get(btLimparLista, { timeout: 300 }).click()
          cy.url().should('include', 'minhaListaDeProdutos');

          cy.get('[data-testid="shopping-cart-empty-message"]').should('have.text', msgCarrinho)
     };

     retornarHome() {
          cy.get(btPaginaInicial, { timeout: 300 }).click();
          cy.url().should('include', 'home');

     };

} export default new SeveRest_page()