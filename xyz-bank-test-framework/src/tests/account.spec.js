// src/tests/account.spec.js
import { test, expect } from '@playwright/test';
import homeSteps from '../steps/homeSteps';
import customerSteps from '../steps/customerSteps';
import accountSteps from '../steps/accountSteps';
import helper from '../helpers/balanceHelper';

test.describe('Account Page', () => {
  let page, homeStepsInstance, customerStepsInstance, accountStepsInstance;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    homeStepsInstance = homeSteps(page);
    customerStepsInstance = customerSteps(page);
    accountStepsInstance = accountSteps(page);

    // Login as Hermoine Granger for each test
    await homeStepsInstance.openHomePage();
    await homeStepsInstance.goToCustomerLogin();
    await customerStepsInstance.selectUser('Hermoine Granger');
    await customerStepsInstance.login();
    await expect(page).toHaveURL(/\/account\/?$/);
  });

  test('should successful load customer account page', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    await expect(page.locator('text=Account Number : 1001')).toBeVisible();
    await expect(page.locator('text=Balance : 5096')).toBeVisible();
    await expect(page.locator('text=Currency : Dollar')).toBeVisible();
    await expect(accountStepsInstance.accountPage.transactionsTab).toBeVisible();
    await expect(accountStepsInstance.accountPage.depositTab).toBeVisible();
    await expect(accountStepsInstance.accountPage.withdrawlTab).toBeVisible();
  });

  test('should successful switch customer account page', async () => {
    await accountStepsInstance.selectAccount('1003');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1003');
    await expect(page.locator('text=Account Number : 1003')).toBeVisible();
    await expect(page.locator('text=Balance : 0')).toBeVisible();
    await expect(page.locator('text=Currency : Rupee')).toBeVisible();
    await expect(accountStepsInstance.accountPage.transactionsTab).toBeVisible();
    await expect(accountStepsInstance.accountPage.depositTab).toBeVisible();
    await expect(accountStepsInstance.accountPage.withdrawlTab).toBeVisible();
  });

  test('should successful load account with transactions', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    await accountStepsInstance.goToTransactions();
    await expect(page.locator('text=Date-Time')).toBeVisible();
    await expect(accountStepsInstance.accountPage.backButton).toBeVisible();
    const count = await accountStepsInstance.accountPage.transactionRows.count();
    expect(count).toBeGreaterThan(0);
    await expect(accountStepsInstance.accountPage.resetButton).toBeVisible();
    await expect(accountStepsInstance.accountPage.startDateInput).toBeVisible();
    await expect(accountStepsInstance.accountPage.endDateInput).toBeVisible();
  });

  test('should successful load account with no transactions', async () => {
    await accountStepsInstance.selectAccount('1003');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1003');
    await accountStepsInstance.goToTransactions();
    await expect(page.locator('text=Date-Time')).toBeVisible();
    await expect(accountStepsInstance.accountPage.backButton).toBeVisible();
    const count = await accountStepsInstance.accountPage.transactionRows.count();
    expect(count).toBe(0);
    await expect(accountStepsInstance.accountPage.resetButton).not.toBeVisible();
    await expect(accountStepsInstance.accountPage.startDateInput).not.toBeVisible();
    await expect(accountStepsInstance.accountPage.endDateInput).not.toBeVisible();
  });

  test('should successful deposit money', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    const balanceBefore = await helper.getBalance(page);
    await accountStepsInstance.goToDeposit();
    await accountStepsInstance.depositAmount('100');
    await expect(accountStepsInstance.accountPage.successDepositMsg).toBeVisible();
    const balanceAfter = await helper.getBalance(page);
    expect(balanceAfter).toBe(balanceBefore + 100);
  });

  test('should not allow deposit zero amount', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    const balanceBefore = await helper.getBalance(page);
    await accountStepsInstance.goToDeposit();
    await accountStepsInstance.depositAmount('0');
    await expect(accountStepsInstance.accountPage.amountInput).toHaveValue('0');
    await expect(accountStepsInstance.accountPage.depositButton).toBeEnabled();
    const balanceAfter = await helper.getBalance(page);
    expect(balanceAfter).toBe(balanceBefore);
  });

  test('should not allow deposit negative amount', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    const balanceBefore = await helper.getBalance(page);
    await accountStepsInstance.goToDeposit();
    await accountStepsInstance.depositAmount('-1');
    await expect(accountStepsInstance.accountPage.amountInput).toHaveValue('-1');
    await expect(accountStepsInstance.accountPage.depositButton).toBeEnabled();
    const balanceAfter = await helper.getBalance(page);
    expect(balanceAfter).toBe(balanceBefore);
  });

  test('should successful withdrawl money', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    const balanceBefore = await helper.getBalance(page);
    await accountStepsInstance.goToWithdrawl();
    await accountStepsInstance.withdrawAmount('10');
    await expect(accountStepsInstance.accountPage.successWithdrawMsg).toBeVisible();
    const balanceAfter = await helper.getBalance(page);
    expect(balanceAfter).toBe(balanceBefore - 10);
  });

  test('should no allow withdraw with insufficient funds', async () => {
    await accountStepsInstance.selectAccount('1001');
    await expect(accountStepsInstance.accountPage.accountIdSelect).toHaveValue('number:1001');
    const balanceBefore = await helper.getBalance(page);
    await accountStepsInstance.goToWithdrawl();
    await accountStepsInstance.withdrawAmount('6000');
    await expect(accountStepsInstance.accountPage.failWithdrawMsg).toBeVisible();
    const balanceAfter = await helper.getBalance(page);
    expect(balanceAfter).toBe(balanceBefore);
  });

  test('should log out user and redirect to login', async () => {
    await accountStepsInstance.logout();
    await expect(page).toHaveURL(/\/customer$/);
    await expect(page.locator('strong')).toContainText('XYZ Bank');
    await expect(page.getByText('Your Name :', { exact: true })).toBeVisible();
  });
});
