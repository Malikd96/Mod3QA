# Calculator Project: Debugging & Cypress Test Integration

## Overview
This project began as a set of JavaScript test scripts for a simple calculator. The scripts contained several errors and incomplete test cases. This README details the issues found, the steps taken to debug and improve the code, and the challenges encountered during the process.

## Issues Found in the Original Scripts
- **Incorrect Expected Value:**  
  The subtraction test was checking for an incorrect value (`subtract(10, 4)` was expected to return `5` instead of the correct value `6`).

- **Improper Division by Zero Handling:**  
  The original `divide` function returned a string `"Error: Division by zero"` when dividing by zero. This approach is inconsistent with typical error handling in JavaScript. The function was updated to throw an error instead.

- **Missing Test Cases:**  
  The original tests did not cover several edge cases:
  - Division by zero.
  - Negative number operations.
  - Large numbers.
  - Decimal values.
  - Non-numeric inputs (e.g., strings or booleans).

- **Repetitive and Unstructured Test Code:**  
  The tests were scattered and used repetitive `console.log()` calls. This made the tests harder to read, maintain, and extend.

## Steps Taken to Debug and Improve
1. **Corrected Expected Values:**  
   - Updated the subtraction test to check for the correct result (`10 - 4 = 6`).

2. **Enhanced Error Handling in the `divide` Function:**  
   - Changed the behavior of `divide` to throw an error when attempting division by zero.
   - Added type checks to ensure operations with non-numeric inputs return `NaN`.

3. **Added Comprehensive Test Cases:**  
   - Introduced tests for edge scenarios such as negative values, zero values, large numbers, decimal values, and invalid inputs.
   - Created a helper function `runTestCase()` to streamline and standardize test output.

4. **Modularized the Code:**  
   - Moved the calculator functions into a separate file (`src/calculator.js`) for better code organization.
   - This modularization facilitates easier unit testing and integration with Cypress.

5. **Integrated Cypress for Testing:**  
   - Set up Cypress to run unit tests from VS Code by placing the test file (`calculator.cy.js`) inside `cypress/e2e/`.
   - Configured `cypress.config.js` to ensure the test files are detected correctly.

## Challenges Faced
- **Cypress Configuration:**  
  - Ensuring that Cypress correctly recognized the test files required careful configuration of the `specPattern` in `cypress.config.js` and a proper project structure.
  
- **Error Handling Consistency:**  
  - Changing the division function to throw errors instead of returning strings was a necessary improvement but required updates in the tests to correctly catch these exceptions.

- **Modularization:**  
  - Separating the calculator functions into their own module and then importing them into the Cypress tests required adjustments to the project structure, which initially led to some import errors.

## Conclusion
The debugging and refactoring process resulted in a more robust and maintainable calculator application with comprehensive unit tests. Integrating Cypress further improved the testing workflow, allowing for easier debugging and test management directly from VS Code.

Feel free to explore the code, run the tests, and provide feedback!

---

