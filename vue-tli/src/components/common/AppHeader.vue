<template>
	<header>
		<div v-if="isUserLOgin">
			<h2>{{ id }}</h2>
			<button @click="logout">로그아웃</button>
		</div>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import router from '@/router';
import store from '@/store';
// const store = useStore();

const id = computed(() => store.getters.getId);
const isUserLOgin = computed(() => store.getters.isLogin);
const logout = () => {
	store.dispatch('clearId');
	router.push({ name: 'login' });
};
</script>
