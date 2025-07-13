import BasePage from './BasePage';

class CustomerPage extends BasePage {
  constructor(page) {
    super(page);
    this.userSelect = page.locator('#userSelect');
    this.selectedOption = page.locator('#userSelect > option:checked');
    this.allOptions = page.locator('#userSelect option');
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
  }

  async selectUser(userName) {
    await this.userSelect.selectOption({ label: userName });
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}

export default CustomerPage;
