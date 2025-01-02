const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "*/ui/*/*.spec.js",
    supportFile: "*/index.js",
    reporter: "mochawesome", 
    reporterOptions: { 
      reportDir: "cypress/reports", 
      overwrite: false, 
      html: true, 
      json: true, 
      charts: true
    },
    setupNodeEvents(on, config) {
    },
  },
});
