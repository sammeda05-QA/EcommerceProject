# EcommerceProject

# E-Commerce Test Automation Framework
## Overview

This repository contains an end-to-end test automation framework for an E-Commerce application, developed using **Playwright and TypeScript**.

The primary objective is to automate web application functionalities and validate critical user workflows through structured, reusable, and maintainable automated test scripts.

The framework is designed using the **Page Object Model (POM)** design pattern and incorporates reusable fixtures, environment-based configuration, and automated test reporting.

This project demonstrates practical implementation of modern QA automation practices, including test design, browser automation, assertions, test execution, debugging, and reporting.

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright Test | Web UI Test Automation |
| TypeScript | Programming Language |
| Node.js | JavaScript Runtime |
| npm | Package Management |
| Page Object Model | Framework Design Pattern |
| dotenv | Environment Configuration |
| Allure | Test Reporting |
| Git & GitHub | Version Control |
| GitHub Actions | Workflow Integration |

## Project Architecture

The framework follows a modular architecture to separate test logic, page interactions, test data, and configuration.

### Project Structure

```text
EcommerceProject/
│
├── .github/
│   └── workflows/           # GitHub Actions workflow files
│
├── environment/             # Environment-specific configuration
│
├── fixtures/                # Reusable Playwright fixtures
│
├── pages/                   # Page Object Model classes
│
├── test-data/               # Test data management
│
├── tests/                   # Automated test specifications
│
├── .gitignore               # Git ignored files
│
├── package.json             # Project dependencies and scripts
│
├── package-lock.json        # Dependency lock file
│
├── playwright.config.ts     # Playwright configuration
│
├── tsconfig.json            # TypeScript configuration
│
└── README.md                # Project documentation
```

## Automation Framework Features

- **Page Object Model (POM):** Separates page-specific locators and actions from test scripts.
- **Reusable Fixtures:** Provides reusable test setup and dependencies.
- **Environment Configuration:** Supports environment-specific settings using dotenv.
- **Parallel Execution:** Supports parallel execution of test files.
- **Browser Automation:** Configured for Chromium-based browser testing.
- **Retry Mechanism:** Configured to retry failed tests in CI environments.
- **Allure Integration:** Supports detailed test execution reporting.
- **Screenshot Capture:** Configured to capture screenshots during test execution.
- **TypeScript:** Provides structured and maintainable automation code.

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/sammeda05-QA/EcommerceProject.git
```

### 2. Navigate to the project directory

```bash
cd EcommerceProject
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install chromium
```

### 5. Configure the environment

The framework loads environment-specific configuration from the `environment` directory.

The default environment is `dev`.

Configure the required `BASE_URL` in the corresponding environment file:

```env
BASE_URL=your-application-url
```

Make sure environment files containing sensitive information are excluded from Git.

## Running Automated Tests

### Execute all test cases

```bash
npm test
```

### Execute tests in headed mode

```bash
npm run headed
```

### Execute tests using Chromium

```bash
npx playwright test --project=chromium
```

### Execute a specific test file

```bash
npx playwright test tests/your-test-file.spec.ts
```

### Execute tests in Playwright UI mode

```bash
npx playwright test --ui
```

## Test Reporting

This framework integrates Allure reporting using `allure-playwright`.

### Generate Allure report

```bash
npx allure generate allure-results --clean -o allure-report
```

### Open Allure report

```bash
npx allure open allure-report
```

Allure reports help analyze test execution results, including passed tests, failed tests, and execution details.

## Configuration and Execution Strategy

The Playwright configuration is maintained in `playwright.config.ts`.

The current configuration includes:

- Test directory configuration.
- Parallel test execution.
- Chromium browser project.
- CI-specific retry mechanism.
- Single worker configuration in CI.
- Environment-specific Base URL.
- Screenshot capture.
- Allure test reporting.

## Quality and Automation Practices

The project follows these automation practices:

1. Maintainable test scripts using Page Object Model.
2. Reusable page methods and fixtures.
3. Separation of test data and test implementation.
4. Environment-specific configuration.
5. Meaningful assertions and validations.
6. Positive and negative test scenario design.
7. Git-based version control and branch management.
8. Structured test execution and reporting.

## Future Enhancements

The framework will continue to evolve with the following improvements:

- Expand functional and regression test coverage.
- Implement data-driven testing.
- Introduce additional cross-browser testing with Firefox and WebKit.
- Enhance failure debugging using screenshots, traces, and videos.
- Improve CI/CD execution and reporting.
- Strengthen test coverage for end-to-end e-commerce workflows.

## Author

**Sammed Admuthe**

QA Engineer | Functional Testing | Automation Testing | Playwright

**GitHub Repository:**  
https://github.com/sammeda05-QA/EcommerceProject

---

*This is an actively evolving QA automation project focused on implementing practical test automation concepts, improving framework design, and demonstrating industry-standard software testing practices.*