# Playwright Test Automation Project

This project contains automated end-to-end tests for the Angular practice application using Playwright framework.

## Project Structure

```
playwright/
├── common/
│   └── pom/                    # Page Object Model classes
│       ├── PWTestPage.ts       # Main navigation and form access
│       └── TestPage.ts         # Form interactions and UI components
├── tests/
│   ├── pw_exercise_two.spec.ts # Main test suite for form filling
│   ├── example.spec.ts         # Example test file
│   └── testOne.spec.ts         # Additional test file
├── test-results/               # Test execution results
├── playwright-report/          # HTML test reports
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies
└── tsconfig.json              # TypeScript configuration
```

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Angular CLI (for running the test application)

## Setup Instructions

### 1. Install Dependencies

```bash
# Navigate to the playwright directory
cd playwright

# Install Playwright and dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### 2. Application Under Test

The tests run against an Angular application located in the `../pw-practice-app` directory. The application is automatically started by Playwright's web server configuration.

**Application Details:**
- **Framework:** Angular 14
- **Port:** 4200
- **Base URL:** http://localhost:4200
- **Start Command:** `npm start` (from pw-practice-app directory)

## Configuration

The Playwright configuration (`playwright.config.ts`) includes:

- **Test Directory:** `./tests`
- **Base URL:** `http://localhost:4200`
- **Browser:** Chromium (Desktop Chrome)
- **Parallel Execution:** Disabled for stability
- **Reporter:** HTML reports
- **Trace:** Retained on failure for debugging
- **Web Server:** Auto-starts Angular app on port 4200

## Test Architecture

### Page Object Model (POM)

The project uses the Page Object Model pattern for maintainable and reusable test code:

#### PWTestPage.ts
- Handles main navigation
- Form menu interactions
- URL navigation with error handling

#### TestPage.ts
- Form filling operations
- Date picker interactions
- Theme selection
- Tooltip handling
- UI component interactions

### Test Structure

Tests are organized using Playwright's `test.step()` for better readability and reporting:

1. **Navigation Steps:** Navigate to application and forms
2. **Form Filling:** Fill various form inputs
3. **Date Picker Handling:** Interact with date selection components
4. **Tooltip Testing:** Hover and validate tooltip content

## Running Tests

### Basic Test Execution

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test pw_exercise_two.spec.ts

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests with specific browser
npx playwright test --project=chromium
```

### Debug Mode

```bash
# Run tests in debug mode
npx playwright test --debug

# Run specific test in debug mode
npx playwright test pw_exercise_two.spec.ts --debug
```

### Test Reports

```bash
# Generate and open HTML report
npx playwright show-report

# Run tests with different reporters
npx playwright test --reporter=list
npx playwright test --reporter=dot
npx playwright test --reporter=json
```

## Test Scenarios

### Main Test Suite (pw_exercise_two.spec.ts)

The primary test "Fill user form" covers:

1. **Dashboard Navigation**
   - Navigate to root URL
   - Access forms section

2. **Form Interactions**
   - Fill Form One: Name and email fields
   - Fill Form Two: Email and password fields

3. **Date Picker Testing**
   - Range date picker selection
   - Single date picker interaction
   - Date validation

4. **Tooltip Validation** (commented out)
   - Hover interactions
   - Tooltip content verification

## Troubleshooting

### Common Issues

1. **Navigation Timeout**
   - Ensure Angular app is running on port 4200
   - Check if `npm start` works in pw-practice-app directory
   - Verify no other services are using port 4200

2. **Missing Imports**
   - Ensure `import { test } from '@playwright/test';` is present in test files
   - Check all page object imports are correct

3. **Element Not Found**
   - Verify selectors in page object models
   - Check if application UI has changed
   - Use Playwright Inspector for debugging: `npx playwright test --debug`

### Debug Tools

```bash
# Open Playwright Inspector
npx playwright test --debug

# Generate trace files
npx playwright test --trace=on

# Record new tests
npx playwright codegen http://localhost:4200
```

## Best Practices

1. **Page Object Model:** Keep page interactions in POM classes
2. **Test Steps:** Use `test.step()` for organized test reporting
3. **Selectors:** Prefer stable selectors (data-testid, role-based)
4. **Waits:** Use explicit waits instead of hard-coded delays
5. **Error Handling:** Implement proper error handling in page objects
6. **Parallel Execution:** Currently disabled for stability

## Dependencies

- **@playwright/test:** ^1.51.1 - Core Playwright testing framework
- **@types/node:** ^22.15.31 - TypeScript definitions for Node.js

## Contributing

1. Follow the existing Page Object Model pattern
2. Add proper TypeScript types
3. Use descriptive test and step names
4. Include error handling in page objects
5. Update this README when adding new features

## Support

For issues and questions:
1. Check Playwright documentation: https://playwright.dev/
2. Review test traces in `test-results/` directory
3. Use HTML reports for detailed test analysis
4. Enable debug mode for step-by-step execution