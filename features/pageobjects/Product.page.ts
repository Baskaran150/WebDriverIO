import { $ } from '@wdio/globals';
import { WebElementUtils } from '../utils/WebElementUtils';

class ProductPage {
  // Selectors
 public  get firstProduct() {
    return $('a[href="/product_details/1"]'); // Modify the product selector as needed
  }

  public get viewCartButton() {
    return $('//u[normalize-space()="View Cart"]'); // Selector for "view cart" button
  }
  public get addtoCartButton()
  {
    return $('//button[normalize-space()="Add to cart"]') //add to cart button
  }

  public get proceedToCheckoutButton() {
    return $('//a[normalize-space()="Proceed To Checkout"]');
  }

  public get productname()
  {
    return $('div[class="product-information"] h2')
  }

  // Actions
  public async addProductToCart() {
    let productname= null;
    await WebElementUtils.clickElement(this.firstProduct);
    productname=await WebElementUtils.getText(this.productname);
    await WebElementUtils.clickElement(this.addtoCartButton);
    await WebElementUtils.clickElement(this.viewCartButton);
    return productname;
  }

  public async proceedToCheckout() {
    await WebElementUtils.clickElement(this.proceedToCheckoutButton);
  }
}

export default new ProductPage();
