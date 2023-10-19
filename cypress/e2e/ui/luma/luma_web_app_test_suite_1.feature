@TestSuite1
Feature: "Luma" E-Commerce Web App - Test Suite #1
    Luma - Search Section Test Suite

    Background: Initial navigation to the "Luma" homepage
        #General step
        Given user navigates to the Luma homepage

    @LM-SS-TC-002
    Scenario Outline: LM-SS-TC-002 - Verify Product Search - Exact match - Valid product name
        #General step
        When clicks the "SearchTextArea" and looks for a "<productName>"
        #General step
        Then the "<productName>" product should be shown in the "SearchResultsDropdown", and be clickable
        #General step
        And the "SearchResultsListTitle" should reflect the "<productName>" product
        #General step
        And the content and total of elements in the "SearchResultsList" should be the expected for "<productName>"
        Examples: 
            |productName|
            |Erika Running Short|
            |Zing Jump Rope|