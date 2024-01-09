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
		<button type="submit" :disabled="!emailValid || !password.length">
			로그인
		</button>
		{{ logMessage }}
	</form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { validateEmail } from '@/utils/validation.js';
// import New from '@/components/New.vue';
import { login } from '@/api/index';
const id = ref('');
const password = ref('');
const logMessage = ref();
const emailValid = computed(() => validateEmail(id.value));

const onSubmit = async () => {
	try {
		const { data } = await login({
			username: id.value,
			password: password.value,
		});
		logMessage.value = `${data.user.username}님 환영합니다`;
	} catch (err) {
		logMessage.value = err.response.data;
	}
};
</script>

<style lang="scss" scoped></style>
