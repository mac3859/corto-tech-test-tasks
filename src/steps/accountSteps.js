import AccountPage from '../pages/AccountPage';

export default function accountSteps(page) {
  const account = new AccountPage(page);

  return {
    async selectAccount(accountId) {
      await account.selectAccount(accountId);
    },
    async goToTransactions() {
      await account.clickTransactionsTab();
    },
    async goToDeposit() {
      await account.clickDepositTab();
    },
    async goToWithdrawl() {
      await account.clickWithdrawlTab();
    },
    async depositAmount(amount) {
      await account.fillDeposit(amount);
    },
    async withdrawAmount(amount) {
      await account.fillWithdrawl(amount);
    },
    async logout() {
      await account.clickLogout();
    },
    accountPage: account
  };
}
