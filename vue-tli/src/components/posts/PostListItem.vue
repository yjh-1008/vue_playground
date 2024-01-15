<template>
	<li>
		<div class="post-title">{{ props.note.title }}</div>
		<div class="post-contents">{{ props.note.contents }}</div>
		<div class="post-time">
			{{ props.note.createdAt }}
			<i class="icon ion-md-create">+</i>
			<i class="icon ion-md-trash" @click="deleteItem">삭제</i>
		</div>
	</li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { deletePost } from '@/api/posts';
// import router from '@/router';
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
</script>

<style lang="scss" scoped></style>
