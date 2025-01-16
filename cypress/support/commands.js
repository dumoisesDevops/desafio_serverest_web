import CadastroPage from '../pages_objects/cadastraPage'; // Verifique se o caminho está correto

Cypress.Commands.add('cadastrarUsuario', (nome, email, password) => {
  const cadastroPage = new CadastroPage();
  cadastroPage.preencherFormularioCadastro(nome, email, password);
  cadastroPage.submeterCadastro();
});

Cypress.Commands.add('submeterCadastro',()  => {
  const cadastroPage = new CadastroPage();
  cadastroPage.submeterCadastro();
});
