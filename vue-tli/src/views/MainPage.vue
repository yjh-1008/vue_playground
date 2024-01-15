<template>
	<div>
		<h1>Main</h1>
		<LoadingSpinner v-if="isLoading" />
		<ul v-else>
			<PostListItem
				v-for="n in notes"
				:key="n._id"
				:note="n"
				@refresh-evetnt="fetchNotes"
			/>
		</ul>
		<i class="icon ion-md-heart"></i>
		<router-link to="add">
			<i class="ion-md-plus">+</i>
		</router-link>
	</div>
</template>

<script setup>
import { fetchPosts } from '@/api/posts.js';
import { ref, onMounted } from 'vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
const notes = ref([]);
const isLoading = ref(false);
onMounted(() => {
	fetchNotes();
});

const fetchNotes = async () => {
	isLoading.value = true;
	const { data } = await fetchPosts();
	isLoading.value = false;
	notes.value = data.posts;
};
</script>
