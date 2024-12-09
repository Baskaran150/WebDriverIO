import { $ } from '@wdio/globals';
import { WebElementUtils } from '../utils/WebElementUtils';

class AccountPage {
  // Selectors
  public get userNameDisplay() {
    return $('//li[10]//a[1]'); // After registration, the username will be shown here
  }

  // Actions
  public async getUserName() {
    return await WebElementUtils.getText(this.userNameDisplay);
  }
}

export default new AccountPage();
