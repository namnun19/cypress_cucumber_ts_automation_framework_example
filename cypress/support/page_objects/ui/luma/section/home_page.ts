import { BasePage } from "support/general_utilities/ui/luma/base_page";
import { homePageWebElements } from "./home_page_elements";

export class HomePage extends BasePage {

    private _headerEnum = this.HeaderEn;
    private _homePageEnum = this.HomePageEn;
    private _homePageElments = homePageWebElements;

    public get headerEn() {
        return this._headerEnum;
    };

    public get homePageEn() {
        return this._homePageEnum;
    };

    public get homePageElements() {
        return this._homePageElments;
    };

    selectProductFromDropdown(
        productName: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: typeof this.headerEn): any {

        cy.wait('@SearchResults');

        cy.get(
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.generalElements, elementLocator)
        ).then($productsDropdowList => {

            // Grabbing the length of the dropdown for future use within the framework
            cy.wrap($productsDropdowList).its('length').as('DropdownLength');

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

    verifyResultsListTitle(
        productName: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: typeof this.homePageEn
    ): void {

        cy.get(
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.homePageElements, elementLocator)
        ).then($title => {

            expect($title.text().toLowerCase()).to.contain(productName.toLowerCase());

        });

    };

    verifyResultsList(
        productName: string,
        featureText: string,
        elementLocator: 'locator' | 'innerText',
        relatedEnum: typeof this.homePageEn
    ): void {

        cy.wait('@MiniCartContent');

        cy.get(
            this.getElementLocatorFromFeatureText(featureText, relatedEnum, this.homePageElements, elementLocator)
        ).then( $resultsList => {

            // TODO: Confirm whether this "Dropdown length" validation suppose a value for the business
            cy.get('@DropdownLength').then( $dropdownLength => {

                if(+$dropdownLength > 1){
                    
                    if($resultsList.length <= +$dropdownLength){

                        cy.wrap($resultsList).eq(0).then( $firstProduct => {
                            expect($firstProduct.text().toLowerCase()).to.contain(productName.toLowerCase());
                        })

                    }else{

                        throw new Error('Result list size is invalid');

                    };

                }else {
                    
                    cy.wrap($resultsList).eq(0).then( $firstProduct => {
                        expect($firstProduct.text().toLowerCase()).to.contain(productName.toLowerCase());
                    });

                };

            });
            
        });

    };

};



export default new HomePage();