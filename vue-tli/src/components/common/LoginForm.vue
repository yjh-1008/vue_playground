<template>
	<form @submit.prevent="onSubmit">
		<div>
			<label for="id"></label>
			<input id="id" type="text" v-model="id" />
		</div>
		<div>
			<label for="password"></label>
			<input id="password" tyoe="password" v-model="password" />
		</div>
		<button type="submit">로그인</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const id = ref('');
const password = ref('');
const logMessage = ref();
// const emailValid = computed(() => validateEmail(id.value));
const router = useRouter();
const store = useStore();
const onSubmit = async () => {
	try {
		const userData = {
			username: id.value,
			password: password.value,
		};
		await store.dispatch('LOGIN', userData);
		router.push('/main');
	} catch (err) {
		logMessage.value = err.response.id;
	}
};
</script>

<style lang="scss" scoped></style>
