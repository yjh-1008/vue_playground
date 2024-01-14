<template>
	<li>
		<div class="post-title">{{ props.note.title }}</div>
		<div class="post-contents">{{ props.note.contents }}</div>
		<div class="post-time">{{ props.note.createdAt }}</div>
	</li>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
	note: {
		type: Object,
		requred: true,
	},
});
</script>

<style lang="scss" scoped></style>
