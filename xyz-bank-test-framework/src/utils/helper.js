async function getBalance(page) {
  // Find the text node "Balance :" and select the next <strong>
  const balanceText = await page.locator('//div[contains(@class,"center")]//text()[contains(., "Balance")]/following-sibling::strong[1]').textContent();
  return parseInt(balanceText.trim(), 10);
}
export default { getBalance };