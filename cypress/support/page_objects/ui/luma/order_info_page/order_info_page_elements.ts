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
    checkoutFormNextButton: {
        locator: 'button[data-role="opc-continue"]',
        innerText: '',
        elementId: CheckoutPageEnum.CheckoutButton
    },
};