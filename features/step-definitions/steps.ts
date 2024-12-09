import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LandingPage from '../pageobjects/Landing.page';
import LoginPage from '../pageobjects/login.page';
import AccountPage from '../pageobjects/Account.page';
import ProductPage from '../pageobjects/Product.page';
import CheckoutPage from '../pageobjects/Checkout.page';

// Step 1: Given I am on the landing page
Given('I am on the landing page', async () => {
    await LandingPage.open();
    await LandingPage.verifylandingpage();
    
  
});

// Step 2: When I click SignIn
When('I click SignIn on the landing page', async () => {
  await LandingPage.clickSignIn();
});

// Step 3: When I create an account with email {string}
When('I create an account with email {string} and name {string}', async (email: string,name: string) => {
  await LoginPage.createAccount(email,name);
});

// Step 4: When I enter my personal details and click Register
When('I enter my personal details and click Register', async () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const password = 'Test123';
  const dobday= '10';
  const dobmonth= 'January';
  const dobyear='2021';
  const address = '123 Main Street';
  const state= 'TN';
  const city = 'SampleCity';
  const zipCode = '12345';
  const phone = '1234567890';

  await LoginPage.registerUser(password,dobday,dobmonth,dobyear,firstName, lastName,address,state, city, zipCode, phone);
});

// Step 5: Then I should see my name and surname displayed on the account page
Then('I should see my name and surname displayed on the account page', async () => {
  const userName = await AccountPage.getUserName();
  expect(userName).to.include('John Doe'); // Check for first and last name
});

// Step 6: When I add a product to the cart
When('I add a product to the cart', async () => {
  await ProductPage.addProductToCart();
});

// Step 7: When I proceed to the checkout page
When('I proceed to the checkout page', async () => {
  await ProductPage.proceedToCheckout();
});

// Step 8: Then I should see the correct product details on the payments page
Then('I should see the correct product details on the payments page', async () => {
  const expectedDetails = 'Product Name'; // Replace with the actual product details
  await CheckoutPage.validateProductDetails(expectedDetails);
});

