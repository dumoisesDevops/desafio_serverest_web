describe('Testes de Login', () => {
    beforeEach(() => {
        cy.visit('/login'); // Acessa a página de cadastro antes de cada teste
    });

    it('Login com usuário válido', () => {
        cy.login('loginValido');
        cy.url().should('include', '/home');
    });

    it('Login com usuário inválido', () => {
        cy.login('loginInvalido');
        cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');

        cy.contains('Email e/ou senha inválidos').should('be.visible');
    });
});
