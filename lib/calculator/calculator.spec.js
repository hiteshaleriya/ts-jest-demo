"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
describe("Calculator tests", function () {
    test("should add two number", function () {
        expect(calculator_1.addition(10, 5)).toBe(15);
    });
    test("should substract two number", function () {
        expect(calculator_1.substraction(10, 5)).toBe(5);
    });
    test("should multiply two number", function () {
        expect(calculator_1.multiplication(10, 5)).toBe(50);
    });
    test("should divide two number", function () {
        expect(calculator_1.division(10, 5)).toBe(2);
    });
});
