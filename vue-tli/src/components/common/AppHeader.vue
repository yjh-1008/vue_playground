<template>
	<header>
		<div>
			<router-link :to="logoLink"> TIL </router-link>
			<h2>{{ id }}</h2>
			<button @click="logout">로그아웃</button>
		</div>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import router from '@/router';
import store from '@/store';
import { deleteCookie } from '@/utils/cookies';
// const store = useStore();

const id = computed(() => store.getters.getId);
// const isUserLogin = computed(() => store.getters.isLogin);
const logoLink = computed(() => (store.getters.isLogin ? '/main' : '/login'));
const logout = () => {
	store.dispatch('clearId');
	store.dispatch('clearToken');
	deleteCookie('til_auth');
	deleteCookie('til_user');
	router.push({ name: 'login' });
};
</script>
