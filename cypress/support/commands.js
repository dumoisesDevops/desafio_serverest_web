import CadastroPage from '../pages_objects/cadastraPage';
import LoginPage from '../pages_objects/loginPage';

Cypress.Commands.add('cadastrarUsuario', (nome, email, password) => {
  const cadastroPage = new CadastroPage();
  cadastroPage.preencherFormularioCadastro(nome, email, password);
  cadastroPage.submeterCadastro();
});

Cypress.Commands.add('submeterCadastro', () => {
  const cadastroPage = new CadastroPage();
  cadastroPage.submeterCadastro();
});

Cypress.Commands.add('login', (userKey) => {
  const loginPage = new LoginPage();
  loginPage.login(userKey)

});
