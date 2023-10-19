import { HeaderEnum } from "./base_page";

export const generalWebElements: {} = {
    searchTextBox: {
        locator: '#search.input-text',
        innerText: '',
        elementId: HeaderEnum.SearchTextArea
    },
    searchResultsDropdown: {
        locator: '#search_autocomplete ul[role="listbox"] li',
        innerText: '',
        elementId: HeaderEnum.SearchResultsDropdown
    },
    shoppingCartButton: {
        locator: '[data-block="minicart"]',
        innerText: '',
        elementId: HeaderEnum.ShoppingCart
    },
    viewCartLink: {
        locator: 'a.action.viewcart',
        innerText: '',
        elementId: null
    },
};