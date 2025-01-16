Projeto de Automação Web
📋 Descrição
Este projeto de automação web utiliza o framework Cypress para automação de testes end-to-end (E2E), com a implementação do padrão Page Objects para facilitar a manutenção e o reaproveitamento de código.

Principais Tecnologias:
Node.js: Plataforma para executar o Cypress.
Cypress: Ferramenta de testes E2E para web.
Page Objects: Padrão utilizado para organizar o código dos testes.
🚀 Instalação
Pré-requisitos:
Node.js (versão LTS recomendada) instalado. Você pode baixar o Node.js aqui.
Cypress (versão 11.2.0 recomendada) instalado.
Passo a Passo de Instalação:
Clone o repositório do projeto:

Estrutura de Arquivos (Page Objects):
O padrão Page Objects organiza o código de testes separando a lógica de interação da interface gráfica em classes representando cada página. Isso facilita a manutenção e reutilização do código.

Exemplo de Estrutura de Pastas:
|-- cypress
    |-- e2e
    |   |-- tests
    |   |   |-- login.cy.js
    |-- pageObjects
    |   |-- LoginPage.js
    |-- support
    |   |-- commands.js
    |-- fixtures

Custom Commands (Opcional):
Para melhorar ainda mais o código e facilitar sua manutenção, você pode definir Custom Commands no arquivo cypress/support/commands.js

🧪 Executando os Testes:
Para rodar os testes via terminal:


npm run test
Se você deseja rodar testes em modo headless (sem interface gráfica):


📦 Padrão de Commits:
Siga o padrão abaixo para mensagens de commits:

git commit -m ": descrição"
📌 Autor/Contato:
Em caso de dúvidas, entre em contato:

Eduardo Moises

Email: eduardo.moisesqa@hotmail.com
