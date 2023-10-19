import { BasePage, CheckoutPageEnum } from "support/general_utilities/ui/luma/base_page";
import { checkoutPageWebElements } from "./checkout_page_elements";

export class CheckoutPage extends BasePage {

    private _headerEnum = this.HeaderEn;
    private _headerGeneralElements = this.generalElements;
    private _checkoutPageEnum = this.CheckoutPageEn;
    private _checkoutPageElments = checkoutPageWebElements;

    public get headerEn() {
        return this._headerEnum;
    };

    public get headerGeneralElements() {
        return this._headerGeneralElements;
    };

    public get checkoutPageEn() {
        return this._checkoutPageEnum;
    };

    public get checkoutPageElements() {
        return this._checkoutPageElments;
    };

    checkoutOrder(featureText: string): void {

        // cy.wait(200).then(() => {
            
            // TODO: Look for a better workaround for the "Safari" (Webkit) issue with "intercept/wait" methods
            // if(Cypress.browser.name !== 'webkit'){

                cy.wait('@OrderSummaryDetails', { requestTimeout: 20000, responseTimeout: 20000 })
            .then(() => {

                this.selectBasicWebElement(
                    featureText,
                    'locator',
                    this.checkoutPageEn,
                    this.checkoutPageElements
                ).click({ force: true })
                    .then(() => {
                        cy.wait('@ShippingAddressForm', { requestTimeout: 40000, responseTimeout: 40000 })
                    });

            });

            // }else{
                // cy.wait(35000);
            // }

        // });

        

    };

    fillOutShippingForm() {

        this.selectBasicWebElement(
            'CheckoutLoadingIcon',
            'locator',
            this.checkoutPageEn,
            this.checkoutPageElements
        ).should('not.exist').then(() => {

            this.fillInputText(
                'Testing',
                'CheckoutFormEmailInput',
                'locator',
                this.checkoutPageEn,
                this.checkoutPageElements
            );

            this.fillInputText(
                'Testing1',
                'CheckoutFormFirstNameInput',
                'locator',
                this.checkoutPageEn,
                this.checkoutPageElements
            );

            this.fillInputText(
                'Testing2',
                'CheckoutFormLastNameInput',
                'locator',
                this.checkoutPageEn,
                this.checkoutPageElements
            );

        });

    };


};

export default new CheckoutPage();