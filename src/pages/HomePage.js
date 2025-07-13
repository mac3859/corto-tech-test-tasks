import BasePage from './BasePage';

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.customerLoginButton = page.getByRole('button', { name: 'Customer Login', exact: true });
    this.bankManagerLoginButton = page.getByRole('button', { name: 'Bank Manager Login', exact: true });
    this.header = page.locator('strong');
    this.userSelect = page.locator('#userSelect');
  }

  async goto() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }

  async clickCustomerLogin() {
    await this.customerLoginButton.click();
  }

  async clickBankManagerLogin() {
    await this.bankManagerLoginButton.click();
  }

  async isCustomerLoginButtonVisible() {
    return await this.customerLoginButton.isVisible();
  }

  async isBankManagerLoginButtonVisible() {
    return await this.bankManagerLoginButton.isVisible();
  }
}

export default HomePage;
