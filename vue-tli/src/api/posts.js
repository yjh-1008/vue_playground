// 학습 노트 데이터를 조회하는 API
import { posts } from './index';
function fetchPosts() {
	return posts.get('/');
}

function createPost(postData) {
	return posts.post('/', postData);
}

//학습노트 1개 조회
function fetchPost(postId) {
	return posts.get(postId);
}

function deletePost(id) {
	return posts.delete(id);
}

function editPost(postId, postData) {
	return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
