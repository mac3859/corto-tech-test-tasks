import { test, expect } from '@playwright/test';
import customers from '../test-data/customers.json';
import { ManagerPage } from '../pages/ManagerPage';
import {
  addCustomerStep,
  openAccountStep,
  deleteCustomerStep,
  searchCustomerStep
} from '../steps/managerSteps';

test.describe('Bank Manager Flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
    await expect(page).toHaveURL(/\/manager\/?$/);
  });

  test('should allow successful add a customer', async ({ page }) => {
    const customerData = customers[0];
    const customerName = await addCustomerStep(page, customerData);

    // Assert customer is in Open Account dropdown
    const manager = new ManagerPage(page);
    await manager.gotoOpenAccount();
    await expect(manager.userSelect.locator('option')).toContainText([customerName]);
  });

  test('should allow successful open an account', async ({ page }) => {
    const customerData = customers[0];

    /* If you want to use factories data for form filling.  */
    // import { generateUniqueCustomer } from '../test-data/factories';
    // const customerData = generateUniqueCustomer();

    await addCustomerStep(page, customerData);
    const customerName = await addCustomerStep(page, customerData);

    const manager = new ManagerPage(page);
    await manager.gotoOpenAccount();
    
    // Assertion: ensure the customer appears in the dropdown before proceeding
    await expect(manager.userSelect.locator('option')).toContainText([customerName]);
    await openAccountStep(page, customerName);

    await openAccountStep(page, customerName);
  });

  test('should allow check customers details', async ({ page }) => {
    const customerData = customers[0];
    await addCustomerStep(page, customerData);

    const manager = new ManagerPage(page);
    await manager.gotoCustomersTab();
    const row = await manager.customerRowByFirstName(customerData.firstName);

    await expect(row).toBeVisible();
    const cols = row.locator('td');
    await expect(cols.nth(0)).toHaveText(customerData.firstName);
    await expect(cols.nth(1)).toHaveText(customerData.lastName);
    await expect(cols.nth(2)).toHaveText(customerData.postCode);
  });

  test('should allow successful delete a customer', async ({ page }) => {
    const customerData = customers[0];
    await addCustomerStep(page, customerData);
    await deleteCustomerStep(page, customerData);

    const manager = new ManagerPage(page);
    await manager.gotoCustomersTab();
    const row = await manager.customerRowByFirstName(customerData.firstName);
    await expect(row).not.toBeVisible();
  });

  test('should allow successful search a customer', async ({ page }) => {
    const customerData = customers[0];
    await addCustomerStep(page, customerData);

    await searchCustomerStep(page, customerData.firstName);

    const manager = new ManagerPage(page);
    const row = await manager.customerRowByFirstName(customerData.firstName);
    await expect(row).toBeVisible();
  });

  // ---- NEGATIVE CASES ----

  test('should not allow add a customer with empty fields', async ({ page }) => {
    const manager = new ManagerPage(page);
    await manager.gotoAddCustomer();
    await manager.submitCustomerForm();
    // Assert that validation or focus remains on first name input
    await expect(manager.firstNameInput).toBeFocused();
  });

  test('should not allow open an account with empty fields', async ({ page }) => {
    const manager = new ManagerPage(page);
    await manager.gotoOpenAccount();
    await manager.clickProcess();
    // Assert that customer select is still focused
    await expect(manager.userSelect).toBeFocused();
  });

  test('should return empty when searching a non-existent user', async ({ page }) => {
    const manager = new ManagerPage(page);
    await manager.gotoCustomersTab();
    await manager.searchCustomer('NotExist');
    // Table body should have no rows
    await expect(manager.tableBody.locator('tr')).toHaveCount(0);
  });
});
