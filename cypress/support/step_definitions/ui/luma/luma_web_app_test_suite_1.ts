import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";

When('clicks the {string} and looks for a {string}', (featureText: string, textToEnter: string) => { 

    HomePage.fillInputText(textToEnter, featureText, 'locator', HomePage.header);

});

Then('the {string} product should be shown in the {string}', (productName: string, featureText: string) => {

    HomePage.selectProductFromList(productName, featureText, 'locator', HomePage.header);

})