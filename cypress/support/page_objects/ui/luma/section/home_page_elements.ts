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
};