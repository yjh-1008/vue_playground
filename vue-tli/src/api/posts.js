// 학습 노트 데이터를 조회하는 API
import { posts } from './index';
function fetchPosts() {
	return posts.get('/');
}

function createPost(postData) {
	console.log('here');
	console.log(postData);
	return posts.post('/', postData);
}

function deletePost(id) {
	return posts.delete(id);
}
export { fetchPosts, createPost, deletePost };
