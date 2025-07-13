import { test, expect } from '@playwright/test';
import homeSteps from '../steps/homeSteps';
import customerSteps from '../steps/customerSteps';

test.describe('Login Page', () => {
  test('should allow successful customer login', async ({ page }) => {
    const home = homeSteps(page);
    const customer = customerSteps(page);

    await home.openHomePage();
    await home.goToCustomerLogin();

    await customer.selectUser('Hermoine Granger');
    await customer.login();

    // Assert successful login
    await expect(page).toHaveURL(/\/account\/?$/);
    await expect(page.locator('.fontBig')).toHaveText('Hermoine Granger');
  });
});
