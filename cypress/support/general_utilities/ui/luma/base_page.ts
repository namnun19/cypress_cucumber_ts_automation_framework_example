/// <reference types="cypress"/>
import { generalWebElements } from "./general_elements";

export enum HeaderEnum { SearchTextArea = 10, SearchResultsDropdown, ShoppingCart, SearchDropdown };
export enum HomePageEnum { SearchResultsListTitle = 20, SearchResultsList };

export type WebElementsResourcesEnum = typeof HeaderEnum | typeof HomePageEnum;


export abstract class BasePage {

    constructor(
        protected generalElements: {} = generalWebElements, 
        protected HeaderEn = HeaderEnum,
        protected HomePageEn = HomePageEnum) {
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

    fillInputText(textToEnter: string, featureText: string, elementLocator: 'locator' | 'innerText', relatedEnum: WebElementsResourcesEnum): void {

        this.selectElementLocatorStrategy(
            elementLocator,
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        ).type(textToEnter);

    };

    // TODO: Confirm whether this method is actually useful, or remove it if otherwise
    selectGeneralWebElement(
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: WebElementsResourcesEnum): any {

        return this.selectElementLocatorStrategy(
            elementLocator,
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        )

    };


};