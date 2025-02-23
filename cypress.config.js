const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    testIsolation: false,
  },
});