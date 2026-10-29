require('dotenv').config()
import { PageBase } from "../pages/PageBase";

class ServeRestApi_API extends PageBase {
    //    usar pugin cy.api() para ver os logs.
    login(emailLogin, senhaLogin) {
       cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: emailLogin,
                password: senhaLogin
            }
        }).then((response) => {
            Cypress.env('token', response.body.authorization)
            expect(response.status).to.eq(200)
             
        });
    };

    listarUsuariosCadastrados() {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

    };

    cadastrarUsuario() {
        const numeroAleatorio = Math.floor(Math.random() * 10001);
        const nomeCompleto = PageBase.prototype.gerarNomeCompleto();
        const email = PageBase.prototype.gerarEmail();
        const senha = PageBase.prototype.gerarNumero();
        const msg = 'Cadastro realizado com sucesso';

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome":nomeCompleto ,
                "email": email,
                "password": `senhaAutomacao${senha}`,
                "administrador": "true"
            }
        }).then((response) => {
            Cypress.env('_id', response.body._id);
            expect(response.body.message).to.eq(`${msg}`);
            expect(response.status).to.eq(201);
            Cypress.env('novoCadastroEmail', `${email}`);
            Cypress.env('novoCadastroSenha', `senhaAutomacao${senha}`);
        })

    };

    buscarUsuarioId() {
        cy.request({
            method: 'GET',
            url: `https://serverest.dev/usuarios/${Cypress.env('_id')}`,

        }).then((response) => {
            expect(response.status).to.eq(200)
        });

    };

    excluirUsuario(msgDelete) {
        cy.request({
            method: 'DELETE',
            url: `https://serverest.dev/usuarios/${Cypress.env('_id')}`,

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq(`${msgDelete}`)
        });

    };

    editarUsuarioId(email, msgEdit) {
       cy.request({
            method: 'PUT',
            url: `https://serverest.dev/usuarios/${Cypress.env('_id')}`,
            body: {
                "nome": "amanda da Silva",
                "email": `${email}`,
                "password": "lokoste",
                "administrador": "true"
            }

        }).then((response) => {
            expect(response.body.message).to.eq(`${msgEdit}`)

        });

    };

    listarProdutosCadastrados() {
       cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos',

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body).to.have.property('produtos');
        });

    };

    cadastrarProduto(produtoCadastro) {
       cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: {
                Authorization: `${Cypress.env('token')}`

            },

            body: {
                "nome": `${produtoCadastro}`,
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
            Cypress.env('_idProduto', response.body._id)

        });

    }

    buscarProdutoId() {

       cy.request({
            method: 'GET',
            url: `https://serverest.dev/produtos/${Cypress.env('_idProduto')}`,

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome');
            expect(response.body).to.have.property('preco');
            expect(response.body).to.have.property('descricao');
        });

    };

    deletarProduto() {
       cy.request({
            method: 'DELETE',
            url: `https://serverest.dev/usuarios/${Cypress.env('_idProduto')}`,
            headers: {
                Authorization: `${Cypress.env('token')}`
            },

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Nenhum registro excluído')
        });

    };

    editarProduto(produtoEdit) {
       cy.request({
            method: 'PUT',
            url: `https://serverest.dev/produtos/${Cypress.env('_idProduto')}`,
            headers: {
                Authorization: `${Cypress.env('token')}`

            },
            body: {
                "nome": `${produtoEdit}`,
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
            }

        })

    };

    listarCarrinhos() {
        cy.reload()
       cy.request({
            method: 'GET',
            url: 'https://serverest.dev/carrinhos',

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('quantidade');
            expect(response.body).to.have.property('carrinhos');
        });

    };

    cadastrarCarrinho() {

       cy.request({

            method: 'POST',
            url: 'https://serverest.dev/carrinhos',
            headers: {
                Authorization: `${Cypress.env('token')}`

            },

            body: {
                "produtos": [
                    {
                        "idProduto": `${Cypress.env('_idProduto')}`,
                        "quantidade": 1
                    }

                ]
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            Cypress.env('_idCarrinho', response.body._id)
        });
    };


    buscarCarrimhoId() {

       cy.request({
            method: 'GET',
            url: `https://serverest.dev/carrinhos/${Cypress.env('_idCarrinho')}`,

        }).then((response) => {
            expect(response.status).to.eq(200);

        });

    };

    excluirCarrinho() {
       cy.request({
            method: 'DELETE',
            url: `https://serverest.dev/carrinhos/concluir-compra`,
            headers: {
                Authorization: `${Cypress.env('token')}`
            },

        }).then((response) => {
            expect(response.status).to.eq(200);

        });
    }

    cancelarCompra() {
       cy.request({
            method: 'DELETE',
            url: `https://serverest.dev/carrinhos/cancelar-compra`,
            headers: {
                Authorization: `${Cypress.env('token')}`
            },

        }).then((response) => {
            expect(response.status).to.eq(200);

        });






    }






















} export default new ServeRestApi_API()