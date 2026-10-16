require("dotenv").config();

const { defineConfig } = require("cypress");

const agodaUrl = process.env.AGODA_URL;
const youtubeUrl = process.env.YOUTUBE_URL;
const amazonUrl = process.env.AMAZON_URL;

if (!agodaUrl) {
  throw new Error("AGODA_URL is missing from the .env file");
}

module.exports = defineConfig({
  video: true,
  videoCompression: 32,
  videosFolder: "cypress/video",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "e2e final assignment",
    reportPageTitle: "e2e final assignment",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    expose: {
      AGODA_URL: agodaUrl,
      YOUTUBE_URL: youtubeUrl,
      AMAZON_URL: amazonUrl
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
