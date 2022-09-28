#language:pt

Funcionalidade: Teste Ticto

  Descrição: Cadastro Usuário

  Contexto:
    Dado que eu acesso o sistema
    E a tela de Formulário abre corretamente

  @Principal
  Cenario: Cadastrar Usuário valido
    Quando eu preencho todos os campos obrigatorios
    E cadastro o usuario
    Entao o usuário deve ser salvo com sucesso

  @Exceção
  Cenario: Cadastrar Usuário invalido
    Quando eu não preencho todos os campos corretamente
    E tento cadastrar o usuário
    Entao o usuário não deve ser salvo com sucesso
    E deve ser exibida mensagem de erro

  @Alternativo
  Cenario: Editar Usuário com dados validos
    Quando eu tento editar um usuário com dados validos
    E tento salvar o usuario
    Entao o usuário deve ser salvo com sucesso

  @Exceção
  Cenario: Editar Usuário com dados invalidos
    Quando eu tento editar um usuário com dados invalidos
    E tento salvar o usuario
    Entao o usuário não deve ser salvo com sucesso
    E deve ser exibida mensagem de erro

  @Alternativo
  Cenario: Apagar Usuário
    Quando eu tento apagar um usuário
    E confirmo a exclusão do usuario
    Entao o usuário deve ser excluido com sucesso