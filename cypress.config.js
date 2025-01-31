const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'https://front.serverest.dev/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000, // Aumenta o timeout padrão para 15 segundos para todos os navegadores
    setupNodeEvents(on, config) {
      // Adiciona o plugin Allure
      allureWriter(on, config);

      // Verifica se a propriedade 'browser' está disponível no config
      const browserName = process.env.CYPRESS_BROWSER || config.browser?.name;

      // Configuração personalizada para o Firefox
      if (browserName === 'firefox') {
        config.firefoxGcInterval = 1000;
      }

      // Configuração para o Chrome com argumentos personalizados
      if (browserName === 'chrome') {
        config.chromeOptions = {
          args: ['--headless', '--no-sandbox'],
        };
      }

      return config;
    },
    env: {
      allureResultsPath: 'cypress/allure-results',  // Caminho dos resultados do Allure
    },
  },
});
