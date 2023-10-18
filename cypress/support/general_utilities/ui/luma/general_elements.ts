import { HeaderEnum } from "./base_page";

export const generalWebElements: {} = {
    searchTextBox: {
        locator: '#search.input-text',
        innerText: '',
        elementId: HeaderEnum.SearchTextArea
    },
    searchResultsList: {
        locator: '#search_autocomplete ul[role="listbox"] li',
        innerText: '',
        elementId: HeaderEnum.SearchResultList
    },
    shoppingCartButton: {
        locator: '',
        innerText: '',
        elementId: HeaderEnum.ShoppingCart
    },
    searchDropdown: {
        locator: '',
        innerText: '',
        elementId: HeaderEnum.SearchDropdown
    },
};