import { $ } from '@wdio/globals';
import Page from './page';
import { WebElementUtils } from '../utils/WebElementUtils'
import { AssertUtils } from '../utils/Assertutils';
import { WebPageUtils } from '../utils/WebPageUtils';
class LandingPage extends Page{
  // Selectors
  public get signInButton() {
    return $('a[href="/login"]'); // SignIn button
  }

  // Actions
 public async clickSignIn() {
    await WebElementUtils.scrollToElement(this.signInButton)
    await WebElementUtils.clickElement(this.signInButton)
  }

  public async verifylandingpage()
  {
    await WebPageUtils.waitForPageLoad();
    await WebElementUtils.waitForElementVisible(this.signInButton)
    await AssertUtils.assertPageTitle('Automation Exercise')

  }

  public open () {
    return super.open('');
}
}

export default new LandingPage();
