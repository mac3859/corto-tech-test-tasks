import CustomerPage from '../pages/CustomerPage';

export default function customerSteps(page) {
  const customer = new CustomerPage(page);

  return {
    async selectUser(userName) {
      await customer.selectUser(userName);
    },
    async login() {
      await customer.clickLogin();
    }
  };
}
