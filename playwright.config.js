console.log('Playwright config loaded!');

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry failed tests
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  // Reporter to use
  reporter: [
    ['list', { printSteps: true }],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['json', { outputFile: 'test-results.json' }]
  ],
  // Configure test tags
  grep: process.env.TEST_TAG ? new RegExp(process.env.TEST_TAG) : undefined,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers
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