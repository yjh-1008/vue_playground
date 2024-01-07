import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
const routes = [
	{
		path: '/login',
		name: 'home',
		component: LoginPage,
	},
	{
		path: '/signup',
		name: 'home',
		component: SignupPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
