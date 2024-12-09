
Feature: Register and checkout on AutomationExercise

  Scenario: Successful registration and product purchase
    Given I am on the landing page
    When I click SignIn on the landing page
    When I create an account with email "vgr@example.com" and name "John Doe"
    When I enter my personal details and click Register
    Then I should see my name and surname displayed on the account page
    When I add a product to the cart
    When I proceed to the checkout page
    Then I should see the correct product details on the payments page
