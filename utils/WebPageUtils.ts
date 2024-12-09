import { Element } from 'webdriverio';
import { $,browser} from '@wdio/globals'
// Helper class to interact with common web elements and actions
export class WebPageUtils {

  // Wait for an element to be visible
  static async waitForElementVisible(selector: string, timeout: number = 5000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
  }

  // Click on an element
  static async clickElement(selector: string): Promise<void> {
    const element = await $(selector);
    await this.waitForElementVisible(selector);
    await element.click();
  }

  // Set input value
  static async setInputValue(selector: string, value: string): Promise<void> {
    const element = await $(selector);
    await this.waitForElementVisible(selector);
    await element.setValue(value);
  }

  // Get the text content of an element
  static async getText(selector: string): Promise<string> {
    const element = await $(selector);
    await this.waitForElementVisible(selector);
    return await element.getText();
  }

  // Check if an element is displayed
  static async isElementDisplayed(selector: string): Promise<boolean> {
    const element = await $(selector);
    return await element.isDisplayed();
  }

  // Wait for an element to be clickable
  static async waitForElementClickable(selector: string, timeout: number = 5000): Promise<void> {
    const element = await $(selector);
    await element.waitForClickable({ timeout });
  }

  // Take a screenshot of the page or specific element
  static async takeScreenshot(element?: Element, fileName: string = 'screenshot'): Promise<void> {
    if (element) {
      const screenshot = await element.saveScreenshot(`./screenshots/${fileName}.png`);
    } else {
      const screenshot = await browser.saveScreenshot(`./screenshots/${fileName}.png`);
    }
  }

  // Assert that an element's text matches a given string
  static async assertElementText(selector: string, expectedText: string): Promise<void> {
    const actualText = await this.getText(selector);
    if (actualText !== expectedText) {
      throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
    }
  }

  // Select a dropdown value by visible text
  static async selectDropdownByText(selector: string, visibleText: string): Promise<void> {
    const dropdown = await $(selector);
    await dropdown.selectByVisibleText(visibleText);
  }

  // Wait for a specific element to be present
  static async waitForElementPresent(selector: string, timeout: number = 5000): Promise<void> {
    const element = await $(selector);
    await element.waitForExist({ timeout });
  }

  // Clear input field
  static async clearInputField(selector: string): Promise<void> {
    const inputField = await $(selector);
    await inputField.clearValue();
  }
}
