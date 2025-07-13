class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForPageLoad(locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async safeClick(locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.waitFor({ state: 'enabled', timeout });
    await locator.click();
  }

  async safeFill(locator, text, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.waitFor({ state: 'enabled', timeout });
    await locator.fill(text);
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async takeScreenshot(path) {
    await this.page.screenshot({ path });
  }
}

export default BasePage;