import { createStore } from 'vuex';

export default createStore({
	state: {
		id: '',
	},
	getters: {
		getId(state) {
			return state.id;
		},
		isLogin(state) {
			return state.id !== '';
		},
	},
	mutations: {},
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
