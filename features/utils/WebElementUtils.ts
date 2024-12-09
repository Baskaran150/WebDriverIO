import { ChainablePromiseElement } from 'webdriverio'; // Import only ChainablePromiseElement

export class WebElementUtils {

  // Helper function to get an element based on selector
   static async getElement(selector: string | ChainablePromiseElement): Promise<ChainablePromiseElement> {
    if (typeof selector === 'string') {
      // If selector is a string, use $ to get the element (returns ChainablePromiseElement)
      return await $(selector);
    } else {
      // If it's already an element (ChainablePromiseElement), return it directly
      return selector;
    }
  }

  // Wait for an element to be visible
  static async waitForElementVisible(selector: string | ChainablePromiseElement, timeout: number = 5000): Promise<void> {
    const element = await this.getElement(selector);
    await element.waitForDisplayed({ timeout });
  }

  // Wait for an element to be clickable
  static async waitForElementClickable(selector: string | ChainablePromiseElement, timeout: number = 5000): Promise<void> {
    const element = await this.getElement(selector);
    await element.waitForClickable({ timeout });
  }

  // Click on an element
  static async clickElement(selector: string | ChainablePromiseElement): Promise<void> {
    const element = await this.getElement(selector);
    await this.waitForElementVisible(element);
    await element.click();
  }

  // Set input value
  static async setInputValue(selector: string | ChainablePromiseElement, value: string): Promise<void> {
    const element = await this.getElement(selector);
    await this.waitForElementVisible(element);
    await element.clearValue();
    await element.setValue(value);
  }

  // Get the text content of an element
  static async getText(selector: string | ChainablePromiseElement): Promise<string> {
    const element = await this.getElement(selector);
    await this.waitForElementVisible(element);
    return await element.getText();
  }

  // Check if an element is displayed
  static async isElementDisplayed(selector: string | ChainablePromiseElement): Promise<boolean> {
    const element = await this.getElement(selector);
    return await element.isDisplayed();
  }

  // Assert that an element's text matches a given string
  static async assertElementText(selector: string | ChainablePromiseElement, expectedText: string): Promise<void> {
    const actualText = await this.getText(selector);
    if (actualText !== expectedText) {
      throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
    }
  }

  // Clear an input field
  static async clearInputField(selector: string | ChainablePromiseElement): Promise<void> {
    const element = await this.getElement(selector);
    await element.clearValue();
  }

  // Check if an element exists
  static async elementExists(selector: string | ChainablePromiseElement): Promise<boolean> {
    const element = await this.getElement(selector);
    return await element.isExisting();
  }

  // Get the attribute value of an element
  static async getElementAttribute(selector: string | ChainablePromiseElement, attributeName: string): Promise<string> {
    const element = await this.getElement(selector);
    return await element.getAttribute(attributeName);
  }

  // Select a dropdown option by visible text
  static async selectDropdownByText(selector: string | ChainablePromiseElement, visibleText: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.selectByVisibleText(visibleText);
  }

  // Take a screenshot of an element or the whole page
  static async takeScreenshot(element?: ChainablePromiseElement, fileName: string = 'screenshot'): Promise<void> {
    if (element) {
      await element.saveScreenshot(`./screenshots/${fileName}.png`);
    } else {
      await browser.saveScreenshot(`./screenshots/${fileName}.png`);
    }
  }

  // Get the value of a radio button or checkbox
  static async getRadioButtonOrCheckboxValue(selector: string | ChainablePromiseElement): Promise<boolean> {
    const element = await this.getElement(selector);
    return await element.isSelected();
  }

  // Scroll to an element
  static async scrollToElement(selector: string | ChainablePromiseElement): Promise<void> {
    const element = await this.getElement(selector);
    await element.scrollIntoView();
  }

  // Wait for an element to disappear
  static async waitForElementDisappear(selector: string | ChainablePromiseElement, timeout: number = 5000): Promise<void> {
    const element = await this.getElement(selector);
    await element.waitForExist({ timeout, reverse: true });
  }
}
