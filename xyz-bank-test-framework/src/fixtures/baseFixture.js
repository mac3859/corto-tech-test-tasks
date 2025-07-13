import { chromium } from '@playwright/test';

async function baseFixture({ request }) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  return { page };
}

export default baseFixture;