import funcWithCallback from './mockFunction';

let mockCallback: any;

describe("Mocking Functions tests", () => {
	beforeAll(() => {
		mockCallback = jest.fn();
		funcWithCallback(2, mockCallback);
	});

    test("should call mock function", () => {
		expect(mockCallback.mock.calls.length).toBe(1);
    });

    test("should have first argument as 2", () => {
		expect(mockCallback.mock.calls[0][0]).toBe(2);
    })
    
});
