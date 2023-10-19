/// <reference types="cypress"/>
import { generalWebElements } from "./general_elements";

export enum HeaderEnum { SearchTextArea = 10, SearchResultsDropdown, ShoppingCart, SearchDropdown };
export enum HomePageEnum { SearchResultsListTitle = 20, SearchResultsList, ProductSize, ProductColor };
export enum CheckoutPageEnum {
    CheckoutItemsList = 30,
    CheckoutButton,
    CheckoutFormEmailInput,
    CheckoutFormFirstNameInput,
    CheckoutFormLastNameInput,
    CheckoutFormCityInput,
    CheckoutFormStateDropdown,
    CheckoutFormZipCodeInput,
    CheckoutFormPhoneNumberInput,
    CheckoutFormNextButton,
};
export enum OrderInfoPageEnum { OrderInfoItemMessage = 40 };

export type WebElementsResourcesEnum =
    typeof HeaderEnum |
    typeof HomePageEnum |
    typeof CheckoutPageEnum |
    typeof OrderInfoPageEnum
    ;


export abstract class BasePage {

    constructor(
        protected generalElements: {} = generalWebElements,
        protected HeaderEn = HeaderEnum,
        protected HomePageEn = HomePageEnum,
        protected CheckoutPageEn = CheckoutPageEnum,
        protected OrderInfoPageEn = OrderInfoPageEnum,
    ) {
    };

    accessWebApplication(): void {
        cy.visit('/');
    };

    selectElementLocatorStrategy(elementLocatorStrategy: 'locator' | 'innerText', actualLocator: string): any {

        return elementLocatorStrategy === 'locator' ? cy.get(actualLocator) : cy.contains(actualLocator);

    };

    getElementLocatorFromFeatureText(
        featureText: string,
        relatedEnum: WebElementsResourcesEnum,
        webElementsObj: {} | undefined,
        elementLocator: 'locator' | 'innerText'): string {

        const identifedWebElement: {} = Object.keys(webElementsObj!)
            .filter(key => (webElementsObj as any)[key]['elementId'] === (relatedEnum as any)[featureText])
            .map(filtetedKey => (webElementsObj as any)[filtetedKey])[0]

        return (identifedWebElement as any)[elementLocator]

    };

    fillInputText(
        textToEnter: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: WebElementsResourcesEnum,
        webElementsObj: {},
    ): void {

        this.selectElementLocatorStrategy(
            elementLocator,
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, webElementsObj, elementLocator)
        ).type(textToEnter);

    };

    // TODO: Confirm whether this method is actually useful, or remove it if otherwise
    selectBasicWebElement(
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: WebElementsResourcesEnum,
        webElementsObj: {},
        ): any {

        return this.selectElementLocatorStrategy(
            elementLocator,
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, webElementsObj, elementLocator)
        )

    };


};