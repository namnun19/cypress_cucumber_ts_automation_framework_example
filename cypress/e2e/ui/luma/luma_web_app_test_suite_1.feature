@TestSuite1
Feature: "Luma" E-Commerce Web App - Test Suite #1

    Luma - Search Section Test Suite

    Background: Initial navigation to the "Luma" homepage
        Given user navigates to the Luma homepage

    @LM-SS-TC-002
    Scenario: Verify Product Search - Exact match - Valid product name
        When clicks the "SearchTextArea" and looks for a "Erika Running Short"
        Then the "Erika Running Short" product should be shown in the "SearchResultList"