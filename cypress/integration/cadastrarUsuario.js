describe('cadastrar usuario', () => {
    it('Visita a página inicial', () => {
      cy.visit('https://exemplo.com');
      cy.contains('Exemplo de Página').should('be.visible');
    });


    it('Cadastrar usuario com dados  validos', () => {
        cy.visit('https://exemplo.com');
        cy.contains('Exemplo de Página').should('be.visible');
      });

  });
  