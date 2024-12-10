import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LandingPage from '../pageobjects/Landing.page';
import LoginPage from '../pageobjects/login.page';
import AccountPage from '../pageobjects/Account.page';
import ProductPage from '../pageobjects/Product.page';
import CheckoutPage from '../pageobjects/Checkout.page';
import { getTestCaseDataByIdentifier } from '../utils/ExcelUtils';
import {generateRandomEmail}from '../utils/Generalutils';

// Step 1: Given I am on the landing page
Given('I am on the landing page', async () => {
  await LandingPage.open();
  await LandingPage.verifylandingpage();
});

// Step 2: When I fetch the test case details for the identifier
When('I fetch the test case details for {string}', async function (testCaseIdentifier: string) {
  try {
    // Fetch the test case data using the identifier from the feature file
    const testCaseData = await getTestCaseDataByIdentifier('./data/TestData.xlsx', 'Sheet1', testCaseIdentifier);
    
    // Store the test case data in the scenario context (this)
    if (testCaseData) {
      this.testCaseData = testCaseData;
    } else {
      throw new Error(`Test case with identifier ${testCaseIdentifier} not found.`);
    }
  } catch (error) {
    console.error('Error fetching test case details:', error);
    throw error;
  }
});


// Step 4: When I enter my personal details and click Register
When('I enter my personal details and click Register', async function () {
  const testCaseData = this.testCaseData;

  if (testCaseData) {
    const firstName = testCaseData[1];  // First Name from Excel data
    const lastName = testCaseData[2];   // Last Name from Excel data
    const email = await generateRandomEmail();      // Generate email from function
    const password = testCaseData[4];   // Password from Excel data
    const dobday = testCaseData[5];     // DOB Day from Excel data
    const dobmonth = testCaseData[6];   // DOB Month from Excel data
    const dobyear = testCaseData[7];    // DOB Year from Excel data
    const address = testCaseData[8];    // Address from Excel data
    const state = testCaseData[9];      // State from Excel data
    const city = testCaseData[10];      // City from Excel data
    const zipCode = testCaseData[11];   // Zip Code from Excel data
    const phone = testCaseData[12];     // Phone from Excel data

    // Now register the user with the extracted values
    await LoginPage.registerUser(password, dobday, dobmonth, dobyear, firstName, lastName, address, state, city, zipCode, phone);
  } else {
    throw new Error('Test case data not found.');
  }
});

// Step 5: Then I should see my name and surname displayed on the account page
Then('I should see my name and surname displayed on the account page', async function() {
  const userName = await AccountPage.getUserName();
  expect(userName).to.include(this.testCaseData[1]);  // Check for first and last name
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
Then('I should see the correct product details on the payments page', async function() {
  const expectedDetails = this.testCaseData[13];  
  await CheckoutPage.validateProductDetails(expectedDetails);
});

//Step 3: Then I should click the signin link
When('I click SignIn on the landing page', async () => {
  await LandingPage.clickSignIn();
})
// Step 4: Then I should enter the name and email
When('I create an account with email and name', async function() {
  await LoginPage.createAccount(await generateRandomEmail(), this.testCaseData[1]);
})

//Step 10: Logout from the Application
Then('I should logoff from application',async ()=>
{
  await LoginPage.logout();
  await LoginPage.home();
})
