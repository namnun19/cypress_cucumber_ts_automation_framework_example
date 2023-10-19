
Feature: "Luma" E-Commerce Web App - Test Suite #2
    Luma - Add Products Test Suite

    Background: Initial navigation to the "Luma" homepage
        #General step
        Given user navigates to the Luma homepage

    @LM-AP-TC-002
    Scenario Outline: Verify Product Addition - Add to Cart - Search Results
        #General step
        When clicks the "SearchTextArea" and looks for a "<productName>"
        #General step
        Then the "<productName>" product should be shown in the "SearchResultsDropdown", and be clickable
        #General step
        And the "SearchResultsListTitle" should reflect the "<productName>" product
        #General step
        And the content and total of elements in the "SearchResultsList" should be the expected for "<productName>"
        And the "<productName>" should be added from the "SearchResultsList" to the the "ShopppingCart"
        Examples: 
            |productName|
            |Erika Running Short|
            |Zing Jump Rope|