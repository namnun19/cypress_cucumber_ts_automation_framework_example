@TestSuite2
Feature: "Luma" E-Commerce Web App - Test Suite #2
    Luma - Add Products Test Suite

    Background: Initial navigation to the "Luma" homepage
        #General step
        Given user navigates to the Luma homepage

    @LM-AP-TC-002
    Scenario Outline: LM-AP-TC-002 - Verify Product Addition - Add to Cart - Search Results
        #General step
        When clicks the "SearchTextArea" and looks for a "<productName>"
        #General step
        Then the "<productName>" product should be shown in the "SearchResultsDropdown", and be clickable
        #General step
        And the "SearchResultsListTitle" should reflect the "<productName>" product
        #General step
        And the content and total of elements in the "SearchResultsList" should be the expected for "<productName>"
        #General step
        And the "<productName>" should be added from the "SearchResultsList" to the "ShoppingCart"
        Examples: 
            |productName|
            |Erika Running Short|
            |Zing Jump Rope|

    @LM-AP-TC-005
    Scenario Outline: LM-AP-TC-005 - Verify Product Addition - Add to Cart - Checkout page UI
        #General step
        When clicks the "SearchTextArea" and looks for a "<productName>"
        #General step
        Then the "<productName>" product should be shown in the "SearchResultsDropdown", and be clickable
        #General step
        And the "SearchResultsListTitle" should reflect the "<productName>" product
        #General step
        And the content and total of elements in the "SearchResultsList" should be the expected for "<productName>"
        #General step
        And the "<productName>" should be added from the "SearchResultsList" to the "ShoppingCart"
        # General step
        When user clicks the "CheckoutButton"
        # General step
        And fills out the form, then clicks the "CheckoutFormNextButton"
        # General step
        # And fills out the form, and clicks the "CheckoutFormNextButton"
        Examples: 
            |productName|
            |Erika Running Short|
            |Zing Jump Rope|