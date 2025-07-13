import { expect } from '@playwright/test';

// Adds a customer and returns their full name.
export async function createCustomer(page, customerData) {
    const { firstName, lastName, postCode } = customerData
    const fullCustomerName = `${firstName} ${lastName}`; 

    await page.getByRole('button', { name: 'Add Customer' }).first().click();
    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    await page.getByPlaceholder('Post Code').fill(postCode);
    const addCustomerButton = page.locator('form').getByRole('button', { name: 'Add Customer', exact: true });
    await expect(addCustomerButton).toBeEnabled();

    await Promise.all([
        page.waitForEvent('dialog').then(dialog => dialog.accept()),
        addCustomerButton.click()
    ]);

    return fullCustomerName;
}

export function generateUniqueCustomer() {
    const uniq = Date.now() + Math.floor(Math.random() * 1000);
    return {
        firstName: `fname${uniq}`,
        lastName: `lname${uniq}`,
        postCode: '1234'
    };
}

// Opens an account for the given customer.
export async function openAccount(page, customerName, currency = 'Dollar') {
    await page.getByRole('button', { name: 'Open Account' }).click();

    // Wait for dropdown to populate
    const userSelect = page.locator('#userSelect');
    await expect(userSelect).toBeVisible();

    // Wait for customer to appear
    await expect(userSelect.locator('option')).toContainText(
        [customerName], 
        { timeout: 10000 }
    );

    await userSelect.selectOption({ label: customerName });
    const currencySelect = page.locator('#currency');
    await currencySelect.selectOption({ label: currency });

    const processButton = page.getByRole('button', { name: 'Process' });
    await Promise.all([
        page.waitForEvent('dialog').then(dialog => dialog.accept()),
        processButton.click()
    ]);
}