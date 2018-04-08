// Mocking Modules
import axios from 'axios';

export default class Users {
    static all() {
    	return axios.get('/users.json').then((resp) => {
    		return resp.data;
    	});
    }
}
