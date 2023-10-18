import { BasePage } from "support/general_utilities/ui/luma/base_page";

export class HomePage extends BasePage {

    private _headerEnum = this.Header;

    public get header() {
        return this._headerEnum;
    }

    selectProductFromList(
        productName: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: typeof this.header): any {

        cy.wait('@SearchResults');

        // TODO: Improve below code to only iterate when more than one result is found
        // cy.get(
        //     this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        // ).each($product => {
        //     if ($product.text() === productName) {
        //         cy.log('Matched?');
        //         cy.wrap($product).click();
        //     };
        // });
        cy.get(
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        ).click();



    };

};

export default new HomePage();