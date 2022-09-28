///<reference types="Cypress"/>

const fakerbr = require('faker-br');

import Cadastro from '../support/pages/cadastro.page'

beforeEach(() => {
    cy.clearCookies()
    cy.visit(Cypress.config('url'))
})

//TESTE

describe('Teste Ticto', () => {
    context('principal', () => {

        //1. Verifique se a página foi carregada;

        it('Carregar pagina com sucesso', () => {

            //Arrange
            var cadastrar = 'Cadastrar'

            //Act

            //Assert
            Cadastro.validarCadastroCliente(cadastrar)

        })

        //2. Preencha nome, e-mail e password inválidos e verifique a mensagem de erro;

        it('Cadastro sem Sucesso', () => {

            //Arrange
            var mensagemNomeInvalido = 'O campo Nome é obrigatório.'
            var mensagemEmailInvalido = 'O campo Email é obrigatório.'            
            var mensagemPasswordInvalido = 'O campo Password é obrigatório.'

            //Act
            
            Cadastro.clicarBotaoCadastrar()

            //Assert
            Cadastro.validarMensagemNomeInvalido(mensagemNomeInvalido)
            Cadastro.validarMensagemEmailInvalido(mensagemEmailInvalido)
            Cadastro.validarMensagemPasswordInvalido(mensagemPasswordInvalido)
        })

        // 2.1 Preencha nome, e-mail e password válidos e cadastre;

        it('Cadastro com Sucesso', () => {

            //Arrange
            var nome = fakerbr.name.findName()
            var email = fakerbr.internet.email(nome)
            var password = fakerbr.internet.password()
            var mensagemSucesso = 'Usuário cadastrado com sucesso.'

            //Act
            Cadastro.preecherCampoNome(nome)
            Cadastro.preencherCampoEmail(email)
            Cadastro.preencherCampoPassword(password)
            Cadastro.clicarBotaoCadastrar()

            //Assert
            Cadastro.validarMensagemCadastro(mensagemSucesso)
        })

        // 3. Verifique se nome e e-mail foram os mesmos que você cadastrou; 

        it('Verificação nome e e-mail', () => {

            //Arrange
            var nome = fakerbr.name.findName()
            var email = fakerbr.internet.email(nome)
            var password = fakerbr.internet.password()

            //Act
            Cadastro.preecherCampoNome(nome)
            Cadastro.preencherCampoEmail(email)
            Cadastro.preencherCampoPassword(password)
            Cadastro.clicarBotaoCadastrar()
            cy.scrollTo('0', '100%') //scroll para baixo
            
            //Assert
            Cadastro.validarNomeCadastro(nome)
            Cadastro.validarEmailCadastro(email)
        })

        // 4.1 Preencha nome e e-mail válidos e confirme a edição. 
        
        it('Verificação edição nome e e-mail', () => {

            //Arrange
            var nome = fakerbr.name.findName()
            var email = fakerbr.internet.email(nome)

            //Act
            cy.scrollTo('0', '100%') //scroll para baixo
            Cadastro.clicarBotaoAções()
            Cadastro.clicarBotaoEditar()
            Cadastro.limparCampoNomeEditar()
            Cadastro.preencherCampoNomeEditar(nome)
            Cadastro.limparCampoEmailEditar()
            Cadastro.preencherCampoEmailEditar(email)
            Cadastro.clicarBotaoSalvarEdicao()

            // 5. Verifique se nome e e-mail foram alterados corretamente no GRID; 

            //Assert
            Cadastro.validarNomeCadastro(nome)
            Cadastro.validarEmailCadastro(email)
        })

        // 6. Apague o cadastro (em ações); 

        it('Apagar Cadastro', () => {

            //Arrange
            var mensagemExclusao = 'Usuário removido com sucesso.'

            //Act
            cy.scrollTo('0', '100%') //scroll para baixo
            Cadastro.clicarBotaoAções()
            Cadastro.clicarBotaoExclusao()
            Cadastro.clicarBotaoConfirmarExclusao()

            // 7. Verifique se o cadastro foi apagado. 

            //Assert
            Cadastro.validarMensagemExclusaoCadastro(mensagemExclusao)
        })
    })
})