import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
});

function registerUser(userData) {
	return instance.post('/signup', userData);
}

function login(userData) {
	return instance.post('/login', userData);
}

export { registerUser, login };
