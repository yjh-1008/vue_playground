<template>
	<form @submit.prevent="onSubmit">
		<div>
			<label for="username">id:</label>
			<input id="username" v-model="id" type="text" />
		</div>
		<div>
			<label for="password">pw:</label>
			<input id="password" v-model="password" type="text" />
		</div>
		<div>
			<label for="nickname">nickname:</label>
			<input id="nickname" v-model="nickname" type="text" />
		</div>
		<button type="submit" :disabled="!emailValid || !password.length">
			회원가입
		</button>

		<p>{{ logMessage }}</p>
	</form>
</template>

<script setup>
import { ref, unref, computed } from 'vue';
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
// import { useRouter } from 'vue-router';
const id = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');
const emailValid = computed(() => validateEmail(id.value));
// const router = useRouter();
const onSubmit = async () => {
	const userData = {
		username: unref(id),
		password: unref(password),
		nickname: unref(nickname),
	};
	const { data } = await registerUser(userData);
	console.log(data);
	initForm();
};

const initForm = () => {
	id.value = '';
	password.value = '';
	nickname.value = '';
};
</script>
