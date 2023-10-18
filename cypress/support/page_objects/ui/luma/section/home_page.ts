import { BasePage } from "support/general_utilities/ui/luma/base_page";

export class HomePage extends BasePage {

    private _headerEnum = this.Header;

    public get header() {
        return this._headerEnum;
    }

    selectProductFromDropdown(
        productName: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: typeof this.header): any {

        cy.wait('@SearchResults');

        cy.get(
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        ).then($productsDropdowList => {

            if ($productsDropdowList.length > 1) {

                // Iterating thru the list of products shown in the dropdown
                $productsDropdowList.toArray().some($product => {

                    // Selecting the first item that matches with the provided product name
                    if ($product.textContent!.toLowerCase().includes(productName.toLowerCase())) {
                        cy.wrap($product).click();
                        // Returning "1" to exit the loop once a match is found
                        return true
                    } else {
                        return new Error('Product name does not match');
                    };

                });

            } else {

                // Selecting the only product shown, when only one result is returned
                if ($productsDropdowList.text().toLowerCase().includes(productName.toLowerCase())) {

                    cy.wrap($productsDropdowList).click();

                } else {

                    return new Error('Product name does not match');

                };

            };

        });

    };

};

export default new HomePage();