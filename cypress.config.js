const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // Adjust path if needed
    supportFile: false, // Or set this to your support file if using one
  }
});
