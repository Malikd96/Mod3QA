/*Script 1: Calculator Function Tests
This script tests the functionality of a simple calculator, but it contains errors and incomplete test
cases.*/

// Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Test Function
function runTests() {
    try {
        console.log("Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail");
        console.log("Subtraction Test 1:", subtract(10, 4) === 6 ? "Pass" : "Fail"); // Fixed expected value
        console.log("Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail");
        console.log("Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail");

        // Edge Case Tests
        console.log("Negative Number Test:", add(-5, -3) === -8 ? "Pass" : "Fail");
        console.log("Large Number Test:", multiply(100000, 100000) === 10000000000 ? "Pass" : "Fail");

        // Division by zero test
        try {
            divide(10, 0);
            console.log("Division by Zero Test: Fail"); // Should not reach this line
        } catch (error) {
            console.log("Division by Zero Test: Pass");
        }

        // Test for decimal values
        console.log("Decimal Test:", divide(5, 2) === 2.5 ? "Pass" : "Fail");

        // Test for non-integer inputs
        console.log("String Input Test:", isNaN(add("5", 3)) ? "Pass" : "Fail"); // Should return NaN

    } catch (error) {
        console.error("Test failed with error:", error.message);
    }
}

// Run Tests
runTests();
