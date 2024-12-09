
import { $,browser} from '@wdio/globals'
import { Element } from 'webdriverio';
export class WebElementUtils {
    // Wait for an element to be visible
    static async waitForElementVisible(selector: string, timeout: number = 5000): Promise<void> {
      const element = await $(selector);
      await element.waitForDisplayed({ timeout });
    }
  
    // Wait for an element to be clickable
    static async waitForElementClickable(selector: string, timeout: number = 5000): Promise<void> {
      const element = await $(selector);
      await element.waitForClickable({ timeout });
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
  
    // Assert that an element's text matches a given string
    static async assertElementText(selector: string, expectedText: string): Promise<void> {
      const actualText = await this.getText(selector);
      if (actualText !== expectedText) {
        throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
      }
    }
  
    // Clear an input field
    static async clearInputField(selector: string): Promise<void> {
      const element = await $(selector);
      await element.clearValue();
    }
  
    // Check if an element exists
    static async elementExists(selector: string): Promise<boolean> {
      const element = await $(selector);
      return await element.isExisting();
    }
  
    // Get the attribute value of an element
    static async getElementAttribute(selector: string, attributeName: string): Promise<string> {
      const element = await $(selector);
      return await element.getAttribute(attributeName);
    }
  
    // Select a dropdown option by visible text
    static async selectDropdownByText(selector: string, visibleText: string): Promise<void> {
      const dropdown = await $(selector);
      await dropdown.selectByVisibleText(visibleText);
    }
  
    // Take a screenshot of an element or the whole page
    static async takeScreenshot(element?: WebdriverIO.Element, fileName: string = 'screenshot'): Promise<void> {
      if (element) {
        await element.saveScreenshot(`./screenshots/${fileName}.png`);
      } else {
        await browser.saveScreenshot(`./screenshots/${fileName}.png`);
      }
    }
  
    // Get the value of a radio button or checkbox
    static async getRadioButtonOrCheckboxValue(selector: string): Promise<boolean> {
      const element = await $(selector);
      return await element.isSelected();
    }
  
    // Scroll to an element
    static async scrollToElement(selector: string): Promise<void> {
      const element = await $(selector);
      await element.scrollIntoView();
    }
  
    // Wait for an element to disappear
    static async waitForElementDisappear(selector: string, timeout: number = 5000): Promise<void> {
      const element = await $(selector);
      await element.waitForExist({ timeout, reverse: true });
    }
  }
  