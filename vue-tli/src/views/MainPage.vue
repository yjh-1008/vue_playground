<template>
	<div>
		<h1>Main</h1>
	</div>
</template>

<script setup>
import { fetchPosts } from '@/api';
import { ref, onMounted } from 'vue';
const notes = ref([]);

onMounted(() => {
	fetchNotes();
});

const fetchNotes = async () => {
	const { data } = await fetchPosts();
	notes.value = data.posts;
};
</script>
