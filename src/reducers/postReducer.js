import { getPost, newPost, updatePost } from '../services/posts.js';

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_POST':
			return action.data;

		case 'NEW_POST':
			return action.data;

		case 'EDIT_POST':
			return action.data;

		case 'CLEAR_POST':
			return null;

		default:
			return state;
	}
};

export const setPost = (id) => {
	return async (dispatch) => {
		const data = await getPost(id);

		dispatch({
			type: 'SET_POST',
			data,
		});
	};
};

export const addPost = (id, post) => {
	return async (dispatch) => {
		const data = await newPost(id, post);

		dispatch({
			type: 'NEW_POST',
			data,
		});
	};
};

export const editPost = (id, content) => {
	return async (dispatch) => {
		const data = await updatePost(id, content);

		dispatch({
			type: 'EDIT_POST',
			data,
		});
	};
};

export const clearPost = () => {
	return {
		type: 'CLEAR_POST',
	};
};

export default reducer;
