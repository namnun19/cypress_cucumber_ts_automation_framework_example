import { Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "support/page_objects/ui/luma/section/home_page";


// Defining the general stap that is included in the "Background" keyboard
Given('user navigates to the Luma homepage', () => {

    HomePage.accessWebApplication();

});