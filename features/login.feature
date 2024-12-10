
Feature: Register and checkout Product 

  Scenario Outline: Successful registration and product purchase
    Given I am on the landing page
    When I fetch the test case details for "<Testcase_ID>"
    When I click SignIn on the landing page
    When I create an account with email and name
    When I enter my personal details and click Register
    Then I should see my name and surname displayed on the account page
    When I add a product to the cart
    When I proceed to the checkout page
    Then I should see the correct product details on the payments page
    Then I should logoff from application

    Examples:
    |Testcase_ID|
    |TC001      |
    |TC002      |
