const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
    supportFile: "./src/pages/**/test/**.cy.{js,jsx}",
    specPattern: "src/pages/**/test/*.cy.{js,jsx}"
  },
});
