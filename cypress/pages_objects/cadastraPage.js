class CadastroPage {
  get nomeInput() {
    return cy.get('input[name="nome"]');
  }
  get emailInput() {
    return cy.get('input[name="email"]');
  }
  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  preencherFormularioCadastro(nome, email, password) {
    this.nomeInput.type(nome);
    this.emailInput.type(email);
    this.passwordInput.type(password);
  }
  submeterCadastro() {
    this.submitButton.click();
  }
}

export default CadastroPage;