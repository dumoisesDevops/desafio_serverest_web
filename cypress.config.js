const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',  // Define o padrão dos testes
    baseUrl: 'https://front.serverest.dev/',  // URL base do site para os testes
    viewportWidth: 1280,  // Largura da tela para os testes
    viewportHeight: 720,  // Altura da tela para os testes

    setupNodeEvents(on, config) {
      // Chama o plugin do Allure para gerar os relatórios
      allureWriter(on, config);
      // Adiciona o plugin do Allure
      require('@shelex/cypress-allure-plugin').addPlugin(on, config);

      // Configuração personalizada para o navegador Firefox
      if (config.browser.name === 'firefox') {
        config.firefoxGcInterval = 1000;
      }

      // Configuração para navegadores com opções específicas
      if (config.browser.name === 'chrome') {
        config.chromeOptions = {
          args: ['--headless', '--no-sandbox'],
        };
      }

      // Retorna a configuração do Cypress com as alterações aplicadas
      return config;
    },

    env: {
      allureResultsPath: 'cypress/allure-results',  // Caminho dos resultados do Allure
    },
  },
});
