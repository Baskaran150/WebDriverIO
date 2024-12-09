import { expect } from 'chai';  // Chai assertion library (optional, but commonly used with WebDriverIO)
import { browser,$ } from '@wdio/globals'
export class AssertUtils {
  // Assert that the element is visible
  static async assertElementVisible(selector: string): Promise<void> {
    const element = await $(selector);
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed, `Expected element ${selector} to be visible`).to.be.true;
  }

  // Assert that the element is not visible
  static async assertElementNotVisible(selector: string): Promise<void> {
    const element = await $(selector);
    const isDisplayed = await element.isDisplayed();
    expect(isDisplayed, `Expected element ${selector} to be hidden`).to.be.false;
  }

  // Assert that the element's text matches the expected text
  static async assertElementText(selector: string, expectedText: string): Promise<void> {
    const actualText = await $(selector).getText();
    expect(actualText, `Expected text of element ${selector} to be "${expectedText}" but got "${actualText}"`).to.equal(expectedText);
  }

  // Assert that the element contains the expected text (partial match)
  static async assertElementContainsText(selector: string, expectedText: string): Promise<void> {
    const actualText = await $(selector).getText();
    expect(actualText.includes(expectedText), `Expected element ${selector} to contain text "${expectedText}" but got "${actualText}"`).to.be.true;
  }

  // Assert that an element is enabled (e.g., a button)
  static async assertElementEnabled(selector: string): Promise<void> {
    const element = await $(selector);
    const isEnabled = await element.isEnabled();
    expect(isEnabled, `Expected element ${selector} to be enabled`).to.be.true;
  }

  // Assert that an element is disabled (e.g., a button)
  static async assertElementDisabled(selector: string): Promise<void> {
    const element = await $(selector);
    const isEnabled = await element.isEnabled();
    expect(isEnabled, `Expected element ${selector} to be disabled`).to.be.false;
  }

  // Assert that the element exists
  static async assertElementExists(selector: string): Promise<void> {
    const element = await $(selector);
    const exists = await element.isExisting();
    expect(exists, `Expected element ${selector} to exist`).to.be.true;
  }

  // Assert that the element does not exist
  static async assertElementDoesNotExist(selector: string): Promise<void> {
    const element = await $(selector);
    const exists = await element.isExisting();
    expect(exists, `Expected element ${selector} to not exist`).to.be.false;
  }

  // Assert the current URL
  static async assertUrl(expectedUrl: string): Promise<void> {
    const currentUrl = await browser.getUrl();
    expect(currentUrl, `Expected URL to be "${expectedUrl}" but got "${currentUrl}"`).to.equal(expectedUrl);
  }

  // Assert the page title
  static async assertPageTitle(expectedTitle: string): Promise<void> {
    const title = await browser.getTitle();
    expect(title, `Expected page title to be "${expectedTitle}" but got "${title}"`).to.equal(expectedTitle);
  }

  // Assert that a value matches the expected value
  static assertValue(expected: any, actual: any): void {
    expect(actual, `Expected value to be "${expected}" but got "${actual}"`).to.equal(expected);
  }

  // Assert that an element has a specific attribute value
  static async assertElementAttribute(selector: string, attributeName: string, expectedValue: string): Promise<void> {
    const actualValue = await $(selector).getAttribute(attributeName);
    expect(actualValue, `Expected element ${selector} to have attribute "${attributeName}" with value "${expectedValue}" but got "${actualValue}"`).to.equal(expectedValue);
  }

  // Assert that a checkbox or radio button is checked
  static async assertElementChecked(selector: string): Promise<void> {
    const element = await $(selector);
    const isSelected = await element.isSelected();
    expect(isSelected, `Expected element ${selector} to be checked`).to.be.true;
  }

  // Assert that a checkbox or radio button is unchecked
  static async assertElementUnchecked(selector: string): Promise<void> {
    const element = await $(selector);
    const isSelected = await element.isSelected();
    expect(isSelected, `Expected element ${selector} to be unchecked`).to.be.false;
  }
}
