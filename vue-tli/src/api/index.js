// import store from '@/store';
import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_BASE_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
	return instance.post('/signup', userData);
}

function login(userData) {
	return instance.post('/login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return instance.get('posts');
}

function createPost(postData) {
	return instance.post('posts', postData);
}

export { registerUser, login, fetchPosts, createPost };
