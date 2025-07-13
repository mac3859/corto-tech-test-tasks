This is the Quality Engineering Technical Test for Corto

Please start from the following:

# Task 1:
https://github.com/mac3859/corto-tech-test-tasks/tree/main/Task-1

# Task 2:

# XYZ Bank Test Framework

## Overview
This is an automated test framework for XYZ Bank web application using Playwright. The framework follows the Page Object Model pattern for maintainable test scripts.

the project was completed in timed environment - completed within 5 hours

| Achievements              | Met | Comments                                       |
| ----------------------------- | ---- | ---------------------------------------------- |
| Framework Selection           | ✅    | Playwright, justified for modern UI automation |
| Code Structure/Patterns       | ✅    | POM, helpers, clear separation                 |
| Test Coverage (Core Flows)    | ✅    | positive and negative paths                    |
| Test Data Separation          | ✅    | Data is centralized and maintainable           |
| CI/CD Integration             | ✅    | GitHub Actions, single-command run             |
| Assertion & Reporting         | ✅    | Concise assertions, HTML reports, screenshots  |
| Maintainability/Extensibility | ✅    | Modular, easy to extend                        |
| Professional Style            | ✅    | Clean code, idiomatic, clear instructions      |
| Documentation                 | ✅    | Comprehensive, clear, actionable README        |
| Time-Boxed Scope              | ✅    | Completed within 4 hours                       |


## Test cases:
          
Here's a list of test cases from the test files in `src/tests/`:

**account.spec.js** (Account Page):
1. should successful load customer account page
2. should successful switch customer account page
3. should successful load account with transactions
4. should successful load account with no transactions
5. should successful deposit money
6. should not allow deposit zero amount
7. should not allow deposit negative amount
8. should successful withdrawl money
9. should log out user and redirect to login
10. should no allow withdraw with insufficient funds

**customer.spec.js** (Login Page):
1. should allow successful customer login

**home.spec.js** (Home Page):
1. should display Customer Login and Bank Manager Login buttons
2. should navigate to Customer Login page
3. should navigate to Bank Manager Login page

**manager.spec.js** (Bank Manager Flows):
1. should allow successful add a customer
2. should allow successful open an account
3. should allow check customers details
4. should allow successful delete a customer
5. should allow successful search a customer
6. should not allow add a customer with empty fields
7. should not allow open an account with empty fields
8. should return empty when searching a non-existent user
        
## Test framework's quality and maintainability

### 1. Page Object Model + Base Page - Maintainability
The framework follows the Page Object Model pattern for maintainable test scripts with base page class for common functionality.

### 2. Common actions
used helper functions that are abstracted in `..src/helpers` folder for common actions

### 3. Group testing
demostrated group testing using, e.g. `test.describe('Bank Manager Flows', () => {...`

### 4. Test data: 

| Practice                        | Benefit                      |
| ------------------------------- | ---------------------------- |
| Centralize in `/test-data/`     | Easy updates, no duplication |
| Use JSON or JS modules          | Human- and code-readable     |
| Import at top of test files     | Clear usage                  |
| Data helpers for lookup/build   | DRY, extensible              |
| Parameterize tests for coverage | Broad, maintainable coverage |
| Reset/create data per test      | Isolation, repeatability     |


### 5. CICD: Github actions

- Added test retries for flaky tests
- Implemented test tagging for different test suites
- Added test result reporting (Allure, HTML reports)
- check `../.github/workflows/playwright.yml`
- check recent actions and artefact: https://github.com/mac3859/corto-tech-test-tasks/actions/workflows/playwright.yml

### 6. Code Quality
Add ESLint with Playwright recommended rules

## Detailed Project Structure

```
xyz-bank-test-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml      # GitHub Actions workflow for Playwright tests
├── src/
│   ├── fixtures/
│   │   └── baseFixture.js     # Base test fixture with common setup/teardown
│   ├── helpers/
│   │   ├── balanceHelper.js      # Helper for deposit/withdrawal balance checks 
│   │   └── bankManagerHelpers.js # Helper functions for bank manager operations
│   ├── pages/
│   │   ├── AccountPage.js      # Page object for account management
│   │   ├── CustomerPage.js     # Page object for customer interactions
│   │   ├── HomePage.js         # Page object for home page elements
│   │   └── ManagerPage.js      # Page object for manager-specific functions
│   ├── steps/
│   │   ├── accountSteps.js     # Test steps for account operations
│   │   ├── customerSteps.js    # Test steps for customer scenarios
│   │   ├── homeSteps.js        # Test steps for home page navigation
│   │   └── managerSteps.js     # Test steps for manager workflows
│   ├── tests/
│   │   ├── account.spec.js     # Test specs for account functionality
│   │   ├── customer.spec.js    # Test specs for customer features
│   │   ├── home.spec.js        # Test specs for home page
│   │   └── manager.spec.js     # Test specs for manager features
│   ├── test-data/
│   │   ├── customers.json      # Test data for account functionality
│   │   ├── user-factories.js   # Test data for unique customers
│   └── utils/
│       ├── common.js           # Common utility functions
│       └── helper.js          # Additional helper utilities

```

## Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests
Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test src/tests/home.spec.js
```

Run in headed mode (visible browser):
```bash
npx playwright test --headed
```

Run with specific browser:
```bash
npx playwright test --project=chromium
```

## Viewing Test Reports
After test execution, view HTML report:
```bash
npx playwright show-report
```

## CI/CD Integration
The project includes GitHub Actions workflow for continuous integration.

## Test result
screenshots here: <img width="998" height="1625" alt="Screenshot 2025-07-13 at 5 04 58 pm" src="https://github.com/user-attachments/assets/b74b11c2-8763-4d74-ba7b-527b8f44386b" />
