import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.onrender.com/api/listings/';

const setAuth = () => ({ Authorization: token });

export const getFeed = async (scope, sort, page = 0) => {
	const addURL = `${sort}/${scope}`;

	const { data } = await axios.get(baseURL + addURL, {
		headers: setAuth(),
		params: { page },
	});

	return data;
};

export const getComments = async (pID, cID, sort = 'best') => {
	const { data } = await axios.get(baseURL + `comments/${sort}`, {
		params: {
			pID,
			cID,
		},
	});

	return data;
};
