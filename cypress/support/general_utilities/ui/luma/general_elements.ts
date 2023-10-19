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
        locator: '',
        innerText: '',
        elementId: HeaderEnum.ShoppingCart
    },
};