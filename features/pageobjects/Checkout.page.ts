import { $ } from '@wdio/globals';
import { WebElementUtils } from '../utils/WebElementUtils';
import { AssertUtils } from '../utils/Assertutils';

class CheckoutPage {
  // Selectors
  public get productDetails() {
    return $('.product-details'); // Modify according to the website's HTML
  }

  public get paymentButton() {
    return $('#payment_button');
  }

  // Actions
  public async validateProductDetails(expectedDetails: string) {
    const actualDetails = await WebElementUtils.getText(this.productDetails);
    await AssertUtils.assertValue(expectedDetails,actualDetails);
  }

  async proceedToPayment() {
    await WebElementUtils.clickElement(this.paymentButton)
  }
}

export default new CheckoutPage();
