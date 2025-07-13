async function getBalance(page) {
  const balanceText = await page.locator('//div[contains(@class,"center")]//text()[contains(., "Balance")]/following-sibling::strong[1]').textContent();
  return parseInt(balanceText.trim(), 10);
}
export default { getBalance };