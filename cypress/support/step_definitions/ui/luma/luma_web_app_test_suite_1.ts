import { Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";

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

