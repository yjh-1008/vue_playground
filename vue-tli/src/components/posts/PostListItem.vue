<template>
	<li>
		<div class="post-title">{{ formatData.title }}</div>
		<div class="post-contents">{{ formatData.contents }}</div>
		<div class="post-time">
			{{ formatData.createdAt }}
			<i class="icon ion-md-create" @click="routeEditPage">+</i>
			<i class="icon ion-md-trash" @click="deleteItem">삭제</i>
		</div>
	</li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { deletePost } from '@/api/posts';
import router from '@/router';
const emits = defineEmits(['refreshEvetnt']);
const props = defineProps({
	note: {
		type: Object,
		requred: true,
	},
});
const deleteItem = async () => {
	if (confirm('정말로 삭제하시겠습니까?')) {
		await deletePost(props.note._id);
		emits('refreshEvetnt');
	}
};
const formatData = computed(() => {
	const newData = { ...props.note, createdAt: new Date(props.note.createdAt) };
	return newData;
});
const routeEditPage = () => {
	router.push(`/post/${props.note._id}`);
};
</script>

<style lang="scss" scoped></style>
