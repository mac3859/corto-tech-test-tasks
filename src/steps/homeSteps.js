import HomePage from '../pages/HomePage';

export default function homeSteps(page) {
  const home = new HomePage(page);

  return {
    async openHomePage() {
      await home.goto();
    },
    async goToCustomerLogin() {
      await home.goto();
      await home.clickCustomerLogin();
    },
    async goToBankManagerLogin() {
      await home.goto();
      await home.clickBankManagerLogin();
    },
    async isCustomerLoginButtonVisible() {
      return await home.isCustomerLoginButtonVisible();
    },
    async isBankManagerLoginButtonVisible() {
      return await home.isBankManagerLoginButtonVisible();
    }
  };
}
