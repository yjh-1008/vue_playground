import { createStore } from 'vuex';

export default createStore({
	state: {
		id: '',
		token: '',
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
	},
	modules: {},
});
