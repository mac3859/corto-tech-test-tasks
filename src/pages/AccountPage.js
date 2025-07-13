import BasePage from './BasePage';

class AccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.userNameText = page.locator('.fontBig'); // Use a general locator if userName is dynamic
    this.accountIdSelect = page.locator('#accountSelect');
    this.logoutButton = page.locator('button:has-text("Logout")');
    this.transactionsTab = page.locator('button:has-text("Transactions")');
    this.depositTab = page.locator('button:has-text("Deposit")').first();
    this.withdrawlTab = page.locator('button:has-text("Withdrawl")').first();
    this.transactionRows = page.locator('tr[id^="anchor"]');
    this.backButton = page.locator('button:has-text("Back")');
    this.resetButton = page.locator('button:has-text("Reset")');
    this.startDateInput = page.locator('input#start[type="datetime-local"]');
    this.endDateInput = page.locator('input#end[type="datetime-local"]');
    this.amountInput = page.locator('input[placeholder="amount"]');
    this.depositButton = page.locator('button:has-text("Deposit")').nth(1);
    this.withdrawlButton = page.locator('button:has-text("Withdraw")').nth(1);
    this.successDepositMsg = page.locator('span.error.ng-binding', { hasText: 'Deposit Successful' });
    this.successWithdrawMsg = page.locator('span.error.ng-binding', { hasText: 'Transaction successful' });
    this.failWithdrawMsg = page.locator('span.error.ng-binding', { hasText: 'Transaction Failed' });
  }

  async selectAccount(accountId) {
    await this.accountIdSelect.selectOption({ label: accountId });
  }
  async clickTransactionsTab() {
    await this.transactionsTab.click();
  }
  async clickDepositTab() {
    await this.depositTab.click();
  }
  async clickWithdrawlTab() {
    await this.withdrawlTab.click();
  }
  async fillDeposit(amount) {
    await this.amountInput.fill(amount);
    await this.depositButton.click();
  }
  async fillWithdrawl(amount) {
    await this.amountInput.fill(amount);
    await this.withdrawlButton.click();
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
}

export default AccountPage;
