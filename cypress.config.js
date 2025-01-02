const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "*/ui/*/*.spec.js",
    supportFile: "*/index.js",
    setupNodeEvents(on, config) {
    },
  },
});
