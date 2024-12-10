import { $ } from '@wdio/globals';
import { WebElementUtils } from '../utils/WebElementUtils';
import { AssertUtils } from '../utils/Assertutils';
import { WebPageUtils } from '../utils/WebPageUtils';

class LoginPage {
  // Selectors
  public get signUpEmailField() {
    return $("//input[@data-qa='signup-email']");
  }

  public get signUpNameField()
  {
    return $("//input[@data-qa='signup-name']")
  }

  public get signUpBtn()
  {
    return $("//button[@data-qa='signup-button']")
  }

  public get loginEmailField()
  {
    return $("//input[@data-qa='login-email']")
  }

  public get loginpasswordField()
  {
    return $("//input[@data-qa='login-password']")
  }

  public get loginbtn()
  {
    return $("//button[@data-qa='login-button']")
  }

  public get logoutbtn()
  {
    return $("//a[@href='/logout']")
  }

  public get createAccountButton() {
    return $("//button[@data-qa='create-account']");
  }
 public get genderone()
 {
  return $("//input[@id='id_gender1']")
 }

 public get gendertwo()
 {
  return $("//input[@id='id_gender2']")
 }
  public get signuppasswordfield()
  {
   return $("//input[@name='password']")
  }

  public get dateofbirthdayfield()
  {
   return $("//select[@name='days']")
  }

  public get dateofbirthmonthfield()
  {
    return $("//select[@name='months']")
  }

  public get dateofbirthyearfield()
  {
    return $("//select[@name='years']")
  }

  public get newslettercheckbox()
  {
    return $("//input[@id='newsletter']")
  }

  public get offerscheckbox()
  {
    return $("//input[@id='optin']")
  }


  public get firstNameField() {
    return $("//input[@id='first_name']");
  }

  public get lastNameField() {
    return $("//input[@id='last_name']");
  }


  public get addressField() {
    return $('//input[@name="address1"]');
  }

  public get cityField() {
    return $('//input[@name="city"]');
  }
public get statefield()
{
  return $('//input[@data-qa="state"]')
}

  public get zipCodeField() {
    return $('//input[@name="zipcode"]');
  }

  public get phoneField() {
    return $('//input[@name="mobile_number"]');
  }

  public get message()
  {
    return $('//p[text()="Congratulations! Your new account has been successfully created!"]')
  }

  public get continuebtn()
  {
    return $('//a[@data-qa="continue-button"]')
  }

  public get homebtn()
  {
    return $('//a[@href="/"]')
  }

  // Actions
  public async createAccount(email: string,name:string) {
    await WebPageUtils.waitForPageLoad();
    await WebElementUtils.setInputValue(this.signUpNameField,name);
    await WebElementUtils.setInputValue(this.signUpEmailField,email);
    await WebElementUtils.scrollToElement(this.signUpBtn);
    await WebElementUtils.clickElement(this.signUpBtn);
  }

  public async registerUser(password: string,bday:string,bmonth:string,byear:string,firstName: string, lastName: string, address: string,state:string, city: string, zipCode: string, phone: string) {
    await WebPageUtils.waitForPageLoad();
    await WebElementUtils.clickElement(this.genderone);
    await WebElementUtils.setInputValue(this.signuppasswordfield,password);
    await WebElementUtils.selectDropdownByText(this.dateofbirthdayfield,bday);
    await WebElementUtils.selectDropdownByText(this.dateofbirthmonthfield,bmonth);
    await WebElementUtils.selectDropdownByText(this.dateofbirthyearfield,byear);
    await WebElementUtils.clickElement(this.newslettercheckbox);
    await WebElementUtils.clickElement(this.offerscheckbox);
    await WebElementUtils.setInputValue(this.firstNameField,firstName);
    await WebElementUtils.setInputValue(this.lastNameField,lastName);
    await WebElementUtils.setInputValue(this.addressField,address);
    await WebElementUtils.setInputValue(this.statefield,state);
    await WebElementUtils.setInputValue(this.cityField,city);
    await WebElementUtils.setInputValue(this.zipCodeField,zipCode);
    await WebElementUtils.setInputValue(this.phoneField,phone);
    await WebElementUtils.scrollToElement(this.createAccountButton)
    await WebElementUtils.clickElement(this.createAccountButton);
    await WebPageUtils.waitForPageLoad();
    const successMessage = await WebElementUtils.getText(this.message);
    await AssertUtils.assertValue('Congratulations! Your new account has been successfully created!',successMessage);
    await WebElementUtils.clickElement(this.continuebtn);
  }

  public async logout()
  {
    await WebElementUtils.clickElement(this.logoutbtn)
  }

  public async home()
  {
    await WebElementUtils.clickElement(this.homebtn)
  }
}

export default new LoginPage();
