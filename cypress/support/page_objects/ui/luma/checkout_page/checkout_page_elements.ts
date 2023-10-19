import { CheckoutPageEnum } from "support/general_utilities/ui/luma/base_page";

export const checkoutPageWebElements: {} = {
    checkoutItemsList: {
        locator: 'strong.product-item-name',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutItemsList
    },
    checkoutButton: {
        locator: 'button[data-role="proceed-to-checkout"]',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutButton
    },
    checkoutFormEmailInput: {
        locator: 'input#customer-email:first',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormEmailInput
    },
    checkoutFormFirstNameInput: {
        locator: 'input[name="firstname"]',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormFirstNameInput
    },
    checkoutFormLastNameInput: {
        locator: 'input[name="lastname"]',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormLastNameInput
    },
    checkoutFormCityInput: {
        locator: 'input#customer-email',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormCityInput
    },
    checkoutFormStateDropdown: {
        locator: 'input#customer-email',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormStateDropdown
    },
    checkoutFormZipCodeInput: {
        locator: 'input#customer-email',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormZipCodeInput
    },
    checkoutFormPhoneNumberInput: {
        locator: 'input#customer-email',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutFormPhoneNumberInput
    },
    checkoutFormNextButton: {
        locator: 'button[data-role="opc-continue"]',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutButton
    },

};