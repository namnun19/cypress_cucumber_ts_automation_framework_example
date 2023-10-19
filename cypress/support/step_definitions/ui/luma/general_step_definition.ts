import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BasePage } from "support/general_utilities/ui/luma/base_page";
import HomePage from "support/page_objects/ui/luma/home_page/home_page";
import CheckoutPage from "support/page_objects/ui/luma/checkout_page/checkout_page";

Before(() => {

    //Intercepting API calls than seemed approiate to help achieve synchronization
    cy.intercept('GET', '**/search/**').as('SearchResults');
    cy.intercept('GET', '**/template/minicart/**').as('MiniCartContent');
    cy.intercept('GET', '**/template/shipping-address/**').as('ShippingAddressForm');
    cy.intercept('GET', '**/template/cart/**').as('OrderSummaryDetails');

})

// Defining the general step that is included in the "Background" keyboard
Given('user navigates to the Luma homepage', () => {

    HomePage.accessWebApplication();

});

// Defining some more general steps shared between features
When('clicks the {string} and looks for a {string}', (featureText: string, textToEnter: string) => {

    HomePage.fillInputText(
        textToEnter,
        featureText,
        'locator',
        HomePage.headerEn,
        HomePage.headerGeneralElements
    );

});

Then(
    'the {string} product should be shown in the {string}, and be clickable',
    (productName: string, featureText: string) => {

        HomePage.selectProductFromDropdown(productName, featureText, 'locator', HomePage.headerEn);

    });

Then('the {string} should reflect the {string} product', (featureText: string, productName: string) => {

    HomePage.verifyResultsListTitle(
        productName,
        featureText,
        'locator',
        HomePage.homePageEn
    );

});

Then('the content and total of elements in the {string} should be the expected for {string}',
    (featureText: string, productName: string) => {

        HomePage.verifyResultsList(productName, featureText, 'locator', HomePage.homePageEn);

    });

Then('the {string} should be added from the {string} to the {string}',
    (productName: string, featureText1: string, featureText2: string) => {

        HomePage.addProductToCart(featureText1);
        HomePage.verifyProductFromCart(productName, featureText2);

    });

When('user clicks the {string}', (featureText: string) => {

    CheckoutPage.checkoutOrder(featureText);

});

When('fills out the form, then clicks the {string}', (featureText: string) => {

    CheckoutPage.fillOutShippingForm();

});