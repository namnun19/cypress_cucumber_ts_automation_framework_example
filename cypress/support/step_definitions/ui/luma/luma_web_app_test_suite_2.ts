import { Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";


Then('the {string} should be added from the {string} to the the {string}', 
(productName: string, featureText1: string, featureText2: string) => {

    HomePage.addProductToCart(productName, featureText1);

});

