/// <reference types="cypress" />
import { add, subtract, multiply, divide } from "../../src/calculator";

describe("Calculator Function Tests", () => {
    it("should add two numbers correctly", () => {
        expect(add(5, 3)).to.equal(8);
    });

    it("should subtract two numbers correctly", () => {
        expect(subtract(10, 4)).to.equal(6);
    });

    it("should multiply two numbers correctly", () => {
        expect(multiply(7, 6)).to.equal(42);
    });

    it("should divide two numbers correctly", () => {
        expect(divide(12, 4)).to.equal(3);
    });
});
