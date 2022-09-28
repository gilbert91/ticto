//**********Mapeamento de elementos**********
const elements = {
    cadastrarButton: 'button[type="submit"][class="btn btn-primary mt-3"]',
    nomeFild: '#name',
    emailFild: '#email',
    passwordFild: '#password',
    mensagemSucessoAlert: 'div[class="alert alert-success"]',
    nomelUltimo: 'table.table-striped tr td:nth-last-child(3)',
    emailUltimo: 'table.table-striped tr td:nth-last-child(2)',
    acoesButton: 'table.table-striped tr td:nth-last-child(1)',
    editarButton: 'div.dropdown-menu a:nth-last-child(3)',
    nomeEditarField: 'div.form-group input[type="text"]:last-child',
    emailEditarField: 'div.form-group input[type="email"]:last-child',
    salvarEditarButton: 'div[class="modal-footer"] button[type="submit"][class="btn btn-primary"]',
    excluirButton: 'div.dropdown-menu a:nth-last-child(1)',
    confirmarExcluirButton: 'div[class="modal-footer"] button[type="submit"][class="btn btn-danger"]',
    mensagemExclusaoSucessoAlert: 'div[class="row mt-5"] div[class="alert alert-success"]',
    mensagemNomeObrigarioAlert: 'div small[class="form-text text-danger"]',
    mensagemEmailObrigarioAlert: 'div small[class="form-text text-danger"]',
    mensagemPasswordObrigarioAlert: 'div small[class="form-text text-danger"]'    
}


class Cadastro {
    //**********Ações**********
    preecherCampoNome(nome){
        cy.get(elements.nomeFild).type(nome)
    }

    preencherCampoEmail(email){
        cy.get(elements.emailFild).type(email)
    }

    preencherCampoPassword(password){
        cy.get(elements.passwordFild).type(password)
    }

    clicarBotaoCadastrar(){
        cy.get(elements.cadastrarButton).click()
    }

    descerFimDaTela(){
        cy.get(elements.fimDaTela).scrollTo
    }
    
    clicarBotaoAções(){
        cy.get(elements.acoesButton).last().click()
    }
    
    clicarBotaoEditar(){
        cy.get(elements.editarButton).last().click()
    }
    
    limparCampoNomeEditar(){
        cy.get(elements.nomeEditarField).last().clear()
    }
    
    preencherCampoNomeEditar(nome){
        cy.get(elements.nomeEditarField).last().type(nome)
    }

    limparCampoEmailEditar(){
        cy.get(elements.emailEditarField).last().clear()
    }
    
    preencherCampoEmailEditar(email){
        cy.get(elements.emailEditarField).last().type(email)
    }

    clicarBotaoSalvarEdicao(){
        cy.get(elements.salvarEditarButton).last().click()
    }

    clicarBotaoExclusao(){
        cy.get(elements.excluirButton).last().click()
    }

    clicarBotaoConfirmarExclusao(){
        cy.get(elements.confirmarExcluirButton).last().click()
    }

    //**********Validação**********

    validarCadastroCliente(cadastrar) {
        cy.get(elements.cadastrarButton).should('contain', cadastrar)
    }

    validarNomeCadastro(nome) {
        cy.get(elements.nomelUltimo).should('contain', nome)
    }

    validarEmailCadastro(email) {
        cy.get(elements.emailUltimo).should('contain', email)
    }

    validarMensagemCadastro(mensagemSucesso) {
        cy.get(elements.mensagemSucessoAlert).should('contain', mensagemSucesso)
    }

    validarMensagemExclusaoCadastro(mensagemSucesso) {
        cy.get(elements.mensagemSucessoAlert).should('contain', mensagemSucesso)
    }

    validarMensagemNomeInvalido(mensagemNomeInvalido) {
        cy.get(elements.mensagemNomeObrigarioAlert).eq(0).should('contain', mensagemNomeInvalido)
    }

    validarMensagemEmailInvalido(mensagemEmailInvalido) {
        cy.get(elements.mensagemEmailObrigarioAlert).eq(1).should('contain', mensagemEmailInvalido)
    }

    validarMensagemPasswordInvalido(mensagemPasswordInvalido) {
        cy.get(elements.mensagemPasswordObrigarioAlert).eq(2).should('contain', mensagemPasswordInvalido)
    }

}

export default new Cadastro();