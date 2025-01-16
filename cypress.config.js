const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js', // Caminho correto dos arquivos de teste
    baseUrl: 'https://front.serverest.dev/', // URL base para os testes
    viewportWidth: 1280, // Largura da tela para os testes
    viewportHeight: 720, // Altura da tela para os testes
    setupNodeEvents(on, config) {
      // Adicione os eventos de configuração do Node.js aqui, se necessário
    },
  },
});
