import { test, expect } from '@playwright/test';
import homeSteps from '../steps/homeSteps';
import HomePage from '../pages/HomePage';

test.describe('Home Page', () => {
  test('should display Customer Login and Bank Manager Login buttons', async ({ page }) => {
    const steps = homeSteps(page);
    const home = new HomePage(page);

    await steps.openHomePage();
    
    await expect(home.customerLoginButton).toBeVisible();
    await expect(home.bankManagerLoginButton).toBeVisible();
});

  test('should navigate to Customer Login page', async ({ page }) => {
    const steps = homeSteps(page);
    const home = new HomePage(page);

    await steps.openHomePage();
    await home.clickCustomerLogin();

    // Assert navigation and elements
    await expect(page).toHaveURL(/\/customer$/);
    await expect(home.header).toHaveText('XYZ Bank');
    await expect(page.getByText('Your Name :', { exact: true })).toBeVisible();
    await expect(home.userSelect).toBeVisible();
    await expect(home.userSelect.locator('option:checked')).toHaveText('---Your Name---');
  });

  test('should navigate to Bank Manager Login page', async ({ page }) => {
    const steps = homeSteps(page);
    const home = new HomePage(page);

    await steps.openHomePage();
    await home.clickBankManagerLogin();

    await expect(page).toHaveURL(/\/manager$/);
    await expect(home.header).toHaveText('XYZ Bank');
  });
});
