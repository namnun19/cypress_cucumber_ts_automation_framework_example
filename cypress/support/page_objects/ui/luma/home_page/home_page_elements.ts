import { HomePageEnum } from "support/general_utilities/ui/luma/base_page";

export const homePageWebElements: {} = {
    searchResultsListTitle: {
        locator: '.page-title-wrapper span[data-ui-id="page-title-wrapper"]',
        innerText: '',
        elementId: HomePageEnum.SearchResultsListTitle
    },
    searchResultsList: {
        // TODO: Verify whether this selector is consistent over time
        locator: '.products.wrapper.grid.products-grid .product-item-info',
        innerText: '',
        elementId: HomePageEnum.SearchResultsList
    },
    productSize: {
        locator: 'div.swatch-attribute.size div div',
        innerText: '',
        elementId: HomePageEnum.ProductSize
    },
    productColor: {
        locator: 'div.swatch-attribute.color div div',
        innerText: '',
        elementId: HomePageEnum.ProductColor
    },
    addToCartButton: {
        locator: 'button[title="Add to Cart"]',
        innerText: '',
        elementId: null
    },
    addedToCartSuccessMessage: {
        locator: 'div[data-ui-id="message-success"]',
        innerText: '',
        elementId: null
    },
};