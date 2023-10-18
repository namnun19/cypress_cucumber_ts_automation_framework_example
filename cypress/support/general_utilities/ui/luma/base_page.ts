/// <reference types="cypress"/>
import { generalWebElements } from "./general_elements";

export enum HeaderEnum { SearchTextArea = 10, SearchResultList, ShoppingCart, SearchDropdown };

export type WebElementsResourcesEnum = typeof HeaderEnum;


export abstract class BasePage {

    constructor(protected generalElements: {} = generalWebElements, protected Header = HeaderEnum) {
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