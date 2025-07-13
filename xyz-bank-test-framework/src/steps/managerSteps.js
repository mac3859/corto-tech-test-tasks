import { ManagerPage } from '../pages/ManagerPage';

export async function addCustomerStep(page, customerData) {
    const manager = new ManagerPage(page);
    await manager.gotoAddCustomer();
    await manager.fillCustomerForm(customerData.firstName, customerData.lastName, customerData.postCode);
    await Promise.all([
        page.waitForEvent('dialog').then(dialog => dialog.accept()),
        manager.submitCustomerForm(),
    ]);
    return `${customerData.firstName} ${customerData.lastName}`;
}

export async function openAccountStep(page, customerName, currency = 'Dollar') {
    const manager = new ManagerPage(page);
    await manager.gotoOpenAccount();
    await manager.userSelect.waitFor({ state: 'visible' });
    await manager.userSelect.selectOption({ label: customerName });
    await manager.selectCurrency(currency);
    await Promise.all([
        page.waitForEvent('dialog').then(dialog => dialog.accept()),
        manager.clickProcess()
    ]);
}

export async function deleteCustomerStep(page, customerData) {
    const manager = new ManagerPage(page);
    await manager.gotoCustomersTab();
    const row = await manager.customerRowByFirstName(customerData.firstName);
    const deleteButton = await manager.deleteButtonForRow(row);
    await deleteButton.click();
}

export async function searchCustomerStep(page, query) {
    const manager = new ManagerPage(page);
    await manager.gotoCustomersTab();
    await manager.searchBox.waitFor({ state: 'visible' });
    await manager.searchCustomer(query);
}
