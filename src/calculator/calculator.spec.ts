import { addition, substraction, multiplication, division } from "./calculator";

describe("Calculator tests", () => {

    test("should add two number", () => {
        expect(addition(10, 5)).toBe(15);
    });
    
    test("should substract two number", () => {
        expect(substraction(10, 5)).toBe(5);
    });
    
    test("should multiply two number", () => {
        expect(multiplication(10, 5)).toBe(50);
    });
    
    test("should divide two number", () => {
        expect(division(10,5)).toBe(2);
    });
    
});
