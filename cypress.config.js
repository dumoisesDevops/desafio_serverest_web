const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://front.serverest.dev/',
    viewportWidth: 1280, 
    viewportHeight: 720, 
    setupNodeEvents(on, config) {
      // Chama o plugin do Allure corretamente
      allureWriter(on, config);
      
      // A função de configuração original do Cypress continua
      require('@shelex/cypress-allure-plugin').addPlugin(on, config);
      return config;
    },
    env: {
      allureResultsPath: 'cypress/allure-results', 
    },
  },
});
