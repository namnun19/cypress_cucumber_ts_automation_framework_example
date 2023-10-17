import { generalWebElements } from "./general_elements";

export enum HeaderEnum { SearchTextArea = 10, ShoppingCart, SearchDropdown };
// enum OptionsEnum { WebTables = 20, PracticeForm, ProgressBar, ToolTips, Droppable, BrokenLinksImages }
// enum ButtonsEnum { Add = 30, Edit, StartProgressBar, HoverMeToSee }

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

    getElementFromFeatureText(featureText: string, relatedEnum: WebElementsResourcesEnum, webElementsObj: {} | undefined, elementLocator: 'locator' | 'innerText'): string {

        const identifedWebElement: {} = Object.keys(webElementsObj!)
            .filter(key => (webElementsObj as any)[key]['elementId'] === (relatedEnum as any)[featureText])
            .map(filtetedKey => (webElementsObj as any)[filtetedKey])[0]

        return (identifedWebElement as any)[elementLocator]

    };

    fillInputText(textToEnter: string, featureText: string, elementLocator: 'locator' | 'innerText', relatedEnum: WebElementsResourcesEnum): void {

        this.selectElementLocatorStrategy(
            elementLocator,
            this.getElementFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        ).type(textToEnter);

    };

};