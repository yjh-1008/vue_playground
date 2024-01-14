import { createStore } from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { login } from '@/api/index';
export default createStore({
	state: {
		id: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		getId(state) {
			return state.id;
		},
		isLogin(state) {
			return state.id !== '';
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		setId(context, val) {
			context.state.id = val;
		},
		clearId(context) {
			context.state.id = '';
		},
		async LOGIN({ commit, dispatch }, userData) {
			const { data } = await login(userData);
			dispatch('setId', data.user.username);
			commit('setToken', data.token);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data;
		},
	},
	modules: {},
});
