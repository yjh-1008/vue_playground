<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
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
					Edit
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
// import router from '@/router';
import { useRoute } from 'vue-router';
import { fetchPost, editPost } from '@/api/posts';
import router from '@/router';
const title = ref('');
const route = useRoute();
const contents = ref('');
const isContentValid = computed(() => {
	return contents.value.length > 200;
});
onBeforeMount(async () => {
	const id = route.params.id;
	const { data } = await fetchPost(id);
	title.value = data.title;
	contents.value = data.contents;
});

const onSubmit = async () => {
	const id = route.params.id;
	await editPost(id, {
		title: title.value,
		contents: contents.value,
	});
	router.push('/main');
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
