const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://front.serverest.dev/',
    viewportWidth: 1280, 
    viewportHeight: 720, 
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin').addPlugin(on, config);
      return config;
    },
    env: {
      allureResultsPath: 'cypress/allure-results', 
    },
  },
});
