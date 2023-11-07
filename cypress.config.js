const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r",
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    charts: true,
    reportPageTitle: 'Demo de rapport',
    embeddedScreenshots: true,
    setupNodeEvents(on, config) {

      const equipe = config.env.equipe
      if(equipe) config.specPattern = `cypress/e2e/${equipe}`
      
      return config
    },
  },
});