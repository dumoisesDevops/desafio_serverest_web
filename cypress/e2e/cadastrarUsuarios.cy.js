describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastrarusuarios');
  });

  it('Deve cadastrar um usuário com dados válidos', () => {
    cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
    cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

    cy.fixture('usuarios.json').then((usuarios) => {
      const tiposUsuarios = Object.keys(usuarios);
      const tipoUsuarioAleatorio = tiposUsuarios[Math.floor(Math.random() * tiposUsuarios.length)];

      const usuario = usuarios[tipoUsuarioAleatorio];
      const nome = usuario.nome;
      const email = usuario.email;
      const password = usuario.password;

      cy.cadastrarUsuario(nome, email, password);


      cy.wait('@usuariosRequest').its('response.statusCode').should('eq', 200);
      cy.wait('@produtosRequest').its('response.statusCode').should('eq', 200);

      cy.url().should('eq', 'https://front.serverest.dev/home');

      cy.screenshot(`cadastro_usuario_${tipoUsuarioAleatorio}_sucesso`);


      delete usuarios[tipoUsuarioAleatorio];

      cy.writeFile('cypress/fixtures/usuarios.json', usuarios);
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


  it('Não permite cadastrar usuário sem preencher campos obrigatórios', () => {
    cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');
    cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
    cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

    cy.submeterCadastro();


    cy.contains('Nome é obrigatório').should('be.visible');
    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
  });

});
