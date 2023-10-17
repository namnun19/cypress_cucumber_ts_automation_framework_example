import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  retries: 1,
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://magento.softwaretestingboard.com/",
    experimentalWebKitSupport: true,
    setupNodeEvents,
  },
});