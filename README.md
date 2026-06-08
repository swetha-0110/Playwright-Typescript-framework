# SauceDemo Playwright Automation Framework
A complete end-to-end automation framework built using Playwright and TypeScript, following Page Object Model, fixtures, test data separation, and CI integration using GitHub Actions.

# Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI)

# Project Structure
SauceDemo-Playwright/
├── pages/                     # Page Object Model classes
├── tests/                     # Test scripts
├── fixtures/                  # Custom test fixtures
├── test-data/                 # JSON test data
├── playwright.config.ts       # Playwright configuration
├── package.json               # Dependencies & scripts
└──.github/workflows/          # CI/CD pipeline


# Running Tests Locally
Install dependencies:
npm install

# Run all tests:
npx playwright test

# View HTML Report
After running tests:
npx playwright show-report

# CI/CD (GitHub Actions)
This project includes a full CI pipeline:
- Runs tests on every push.
- Runs tests on every Pull Request.
- Uploads HTML report as an artifact.
- Ensures code quality before merging.

# Workflow file:  
'.github/workflows/playwright.yml'

# Features
- Page Object Model (POM)
- Test fixtures for reusable setup
- Test data JSON files
- Cross-browser support (Chromium, Firefox, WebKit)
- GitHub Actions CI pipeline
- HTML reporting
- Clean folder structure
- Scalable framework design

# How to Run a Specific Test
npx playwright test tests/login.spec.ts

# Coming Soon (Future Enhancements)
- Allure reporting.
- Parallel test execution in CI.
- Environment-based config (dev/stage/prod).
- Visual regression tests.

# Author:
Swetha Aligety  
QA Automation Engineer | Playwright + TypeScript  
updated Readme to trigeer CI
