import axios from 'axios';

const getAllPostsService = () => {
	return axios.get('/api/posts');
};

const getSinglePostService = postId => {
	return axios.get(`/api/posts/${postId}`);
};

const createPostService = ({ postData, token }) => {
	return axios.post(
		'/api/posts',
		{ postData },
		{
			headers: { authorization: token }
		}
	);
};

const editPostService = ({ token, postImage, postId, content }) => {
	return axios.post(
		`/api/posts/edit/${postId}`,
		{ postData: { content, postImage } },
		{
			headers: { authorization: token }
		}
	);
};

const deletePostService = ({ _id, token }) => {
	return axios.delete(`/api/posts/${_id}`, {
		headers: { authorization: token }
	});
};

const likePostService = ({ _id, token }) => {
	return axios.post(
		`/api/posts/like/${_id}`,
		{},
		{
			headers: { authorization: token }
		}
	);
};

const dislikePostService = ({ _id, token }) => {
	return axios.post(
		`/api/posts/dislike/${_id}`,
		{},
		{
			headers: { authorization: token }
		}
	);
};

const addCommentService = ({ postId, commentData, token }) => {

	return axios.post(
		`/api/comments/add/${postId}`,
		{ commentData },
		{
			headers: { authorization: token }
		}
	);
};

const editCommentService = ({ token, commentData, postId, commentId }) => {
	return axios.post(
		`/api/comments/edit/${postId}/${commentId}`,
		{ commentData },
		{
			headers: { authorization: token }
		}
	);
};

const deleteCommentService = ({ token, postId, commentId }) => {
	return axios.post(
		`/api/comments/delete/${postId}/${commentId}`,
		{},
		{
			headers: { authorization: token }
		}
	);
};

export {
	getAllPostsService,
	getSinglePostService,
	createPostService,
	editPostService,
	deletePostService,
	likePostService,
	dislikePostService,
	addCommentService,
	editCommentService,
	deleteCommentService
};
