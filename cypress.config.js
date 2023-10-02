const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 30000,
  e2e: {
    baseUrl: "https://www.unimed.coop.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
