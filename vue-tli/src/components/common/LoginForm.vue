<template>
	<form @submit.prevent="onSubmit">
		<div>
			<label for="id"></label>
			<input id="id" type="text" v-model="id" />
		</div>
		<div>
			<label for="password"></label>
			<input id="password" type="password" v-model="password" />
			<span v-if="!emailValid || !password.length" class="error">error</span>
		</div>
		<button
			type="submit"
			class="btn"
			:disabled="!emailValid || !password.length"
			:class="!emailValid || !password.length ? 'disabled' : null"
		>
			로그인
		</button>
	</form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { validateEmail } from '@/utils/validation';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const id = ref('');
const password = ref('');
const logMessage = ref();
// eslint-disable-next-line no-unused-vars
const emailValid = computed(() => validateEmail(id.value));
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
