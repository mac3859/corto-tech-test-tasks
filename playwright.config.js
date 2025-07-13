console.log('Playwright config loaded!');

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list', { printSteps: true }],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['json', { outputFile: 'test-results.json' }]
  ],
  use: {
    baseURL: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
