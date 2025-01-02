const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "*/ui/lambdaTestPlayground/*.spec.js",
    supportFile: "*/index.js", // Disable the support file if not needed
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
