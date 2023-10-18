import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";

Before(() => {

    cy.intercept('GET', '**/search/**').as('SearchResults');

})

// Defining the general step that is included in the "Background" keyboard
Given('user navigates to the Luma homepage', () => {

    HomePage.accessWebApplication();

});

// Defining some more general steps shared between features
When('clicks the {string} and looks for a {string}', (featureText: string, textToEnter: string) => {

    HomePage.fillInputText(textToEnter, featureText, 'locator', HomePage.header);

});

Then(
    'the {string} product should be shown in the {string} and clickable',
    (productName: string, featureText: string) => {

        HomePage.selectProductFromDropdown(productName, featureText, 'locator', HomePage.header);

    });