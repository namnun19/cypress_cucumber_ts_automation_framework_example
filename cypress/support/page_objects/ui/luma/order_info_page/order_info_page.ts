import { BasePage, CheckoutPageEnum } from "support/general_utilities/ui/luma/base_page";
import { checkoutPageWebElements } from "../checkout_page/checkout_page_elements";

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

    

};

export default new CheckoutPage();