import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL;

function registerUser(userData) {
	const url = baseURL + '/signup';
	return axios.post(url, userData);
}

export { registerUser };
