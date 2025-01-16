describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastrarusuarios'); // Acessa a página de cadastro antes de cada teste
  });

  it('Deve cadastrar um usuário com dados válidos', () => {
    cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');
    cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
    cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

    cy.fixture('usuarios.json').then((usuarios) => {
      const tiposUsuarios = Object.keys(usuarios); // Pega as chaves (tipos de usuários)
      const tipoUsuarioAleatorio = tiposUsuarios[Math.floor(Math.random() * tiposUsuarios.length)]; // Escolhe um tipo aleatório de usuário

      const usuario = usuarios[tipoUsuarioAleatorio]; // Pega os dados do usuário escolhido aleatoriamente
      const nome = usuario.nome;
      const email = usuario.email;
      const password = usuario.password;

      cy.cadastrarUsuario(nome, email, password); // Realiza o cadastro do usuário com os dados gerados

      cy.wait('@loginRequest').its('response.statusCode').should('eq', 200); // Verifica a resposta da requisição de login
      cy.wait('@usuariosRequest').its('response.statusCode').should('eq', 200); // Verifica a resposta da requisição de usuários
      cy.wait('@produtosRequest').its('response.statusCode').should('eq', 200); // Verifica a resposta da requisição de produtos

      cy.url().should('eq', 'https://front.serverest.dev/home'); // Verifica se a URL foi redirecionada corretamente para a página inicial

      cy.screenshot(`cadastro_usuario_${tipoUsuarioAleatorio}_sucesso`); // Tira uma screenshot para validar o sucesso do cadastro
    });
  });

  it('Não permite cadastrar um usuário com email que já existe na base', () => {
    cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');
    cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
    cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

    const nome = "Admin User";
    const email = "admin@user.com";
    const password = "admin123";

    cy.cadastrarUsuario(nome, email, password);

    cy.contains('Este email já está sendo usado').should('be.visible');
  });


  it.only('Não permite cadastrar usuário sem preencher campos obrigatórios', () => {
    cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');
    cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
    cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

    cy.submeterCadastro()


    cy.contains('Nome é obrigatório').should('be.visible');
    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
  });

});
