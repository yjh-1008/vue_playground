import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '',
		redirect: '/login',
	},
	{
		path: '/add',
		component: () => import('../views/PostAddPage.vue'),
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
	},
	{
		path: '/post/:id',
		component: () => import('@/views/PostPage.vue'),
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

export default router;
