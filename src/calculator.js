export function add(a, b) {
    return typeof a === "number" && typeof b === "number" ? a + b : NaN;
}

export function subtract(a, b) {
    return typeof a === "number" && typeof b === "number" ? a - b : NaN;
}

export function multiply(a, b) {
    return typeof a === "number" && typeof b === "number" ? a * b : NaN;
}

export function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return NaN;
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
}
