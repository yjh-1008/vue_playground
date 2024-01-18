import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
const routes = [
	{
		path: '',
		redirect: '/login',
	},
	{
		path: '/add',
		component: () => import('../views/PostAddPage.vue'),
		meta: { auth: true },
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('../views/SignupPage.vue'),
	},
	{
		path: '/main',
		component: () => import('@/views/MainPage.vue'),
		meta: { auth: true },
	},
	{
		path: '/post/:id',
		component: () => import('@/views/PostPage.vue'),
		meta: { auth: true },
	},
	{
		path: '/:catchAll(.*)',
		component: () => import('@/views/NotFoundPage'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}
	next();
});

export default router;
