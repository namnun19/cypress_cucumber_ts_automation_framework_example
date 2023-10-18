import { Before, Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";

Before(() => {

    cy.intercept('GET', '**/search/**').as('SearchResults');

})

// Defining the general step that is included in the "Background" keyboard
Given('user navigates to the Luma homepage', () => {

    HomePage.accessWebApplication();

});