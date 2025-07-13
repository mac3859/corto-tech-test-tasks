import BasePage from './BasePage';

export class ManagerPage extends BasePage {
  constructor(page) {
    super(page);
        // Top nav buttons
        this.addCustomerTab = page.getByRole('button', { name: 'Add Customer' }).first();
        this.openAccountTab = page.getByRole('button', { name: 'Open Account' });
        this.customersTab = page.getByRole('button', { name: 'Customers' });

        // Add Customer form
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postCodeInput = page.getByPlaceholder('Post Code');
        this.formAddCustomerButton = page.locator('form').getByRole('button', { name: 'Add Customer', exact: true });

        // Open Account
        this.userSelect = page.locator('#userSelect');
        this.currencySelect = page.locator('#currency');
        this.processButton = page.getByRole('button', { name: 'Process' });

        // Customers Table/Search
        this.searchBox = page.getByPlaceholder('Search Customer');
        this.tableBody = page.locator('table.table tbody');
    }

    // UI actions
    async gotoAddCustomer() { await this.addCustomerTab.click(); }
    async gotoOpenAccount() { await this.openAccountTab.click(); }
    async gotoCustomersTab() { await this.customersTab.click(); }

    async fillCustomerForm(firstName, lastName, postCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
    }
    async submitCustomerForm() { await this.formAddCustomerButton.click(); }

    async selectUserByName(name) {
        await this.userSelect.selectOption({ label: name });
    }
    async selectCurrency(currency) {
        await this.currencySelect.selectOption({ label: currency });
    }
    async clickProcess() { await this.processButton.click(); }

    async searchCustomer(query) {
        await this.searchBox.fill(query);
    }
    async customerRowByFirstName(firstName) {
        return this.page.locator('tr', { has: this.page.locator('td', { hasText: new RegExp(`^${firstName}$`) }) });
    }
    async deleteButtonForRow(row) {
        return row.getByRole('button', { name: 'Delete' });
    }
}
