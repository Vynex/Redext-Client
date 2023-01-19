import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.onrender.com/api/comments/';

const setAuth = () => ({ Authorization: token });

export const getComment = async (id) => {
	const { data } = await axios.get(baseURL, {
		params: { cID: id },
	});

	return data;
};

export const newComment = async (pID, cID, content) => {
	const { data } = await axios.post(
		baseURL,
		{ content },
		{ headers: setAuth(), params: { pID, cID } }
	);

	return data;
};

export const destroyComment = async (cID) => {
	const { data } = await axios.delete(baseURL, {
		headers: setAuth(),
		params: { cID },
	});

	return data;
};
