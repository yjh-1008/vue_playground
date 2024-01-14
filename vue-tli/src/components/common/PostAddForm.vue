<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="onSubmit">
				<div>
					<label for="title">TItle</label>
					<input id="title" v-model="title" type="text" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea id="contents" type="text" v-model="contents" rows="5" />
					<p v-show="isContentValid">text is to long!</p>
				</div>
				<button class="btn" type="submit" :disabled="isContentValid">
					Create
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { createPost } from '@/api/index';
const title = ref('');
const contents = ref('');
const isContentValid = computed(() => {
	return contents.value.length > 200;
});
const onSubmit = async () => {
	try {
		const postData = {
			title: title.value,
			contents: contents.value,
		};
		const { data } = await createPost(postData);
		console.log(data);
	} catch (err) {
		alert(err.response.data.message);
		title.value = '';
		contents.value = '';
	}
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}

.btn {
	color: white;
}
</style>
