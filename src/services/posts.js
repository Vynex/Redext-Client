import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.herokuapp.com/api/posts';

const setAuth = () => ({ Authorization: token });

export const getPost = async (id) => {
	const { data } = await axios.get(baseURL, {
		params: { pID: id },
	});

	return data;
};

export const newPost = async (id, post) => {
	const { data } = await axios.post(baseURL, post, {
		params: { sID: id },
		headers: setAuth(),
	});

	return data;
};

export const updatePost = async (id, content) => {
	const { data } = await axios.patch(
		baseURL,
		{ content },
		{
			params: { pID: id },
			headers: setAuth(),
		}
	);

	return data;
};

export const destroyPost = async (id) => {
	const { data } = await axios.delete(baseURL, {
		headers: setAuth(),
		params: { pID: id },
	});

	return data;
};
