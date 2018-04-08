jest.mock('./mockFuncDef'); // this happens automatically with automocking
import myFunc from './mockFuncDef';

describe("Mocking Functions Implementation tests", () => {
	beforeAll(() => {
		// myFunc is a mock function
		myFunc.mockImplementation(() => 42);
	});

    test("should mock function implementation/definition", () => {
		expect(myFunc()).toBe(42);
    });
    
});
