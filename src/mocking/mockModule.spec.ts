import axios from 'axios';
import Users from './mockModule';

jest.mock('axios');

describe("Mocking Modules tests", () => {

    test("should fetch users", (done) => {
    	const resp = {data: [{name: 'Bob'}]};
  		axios.get.mockResolvedValue(resp);

		Users.all().then((users) => {
			expect(users).toEqual(resp.data);
			done();
		});
    });
    
});
