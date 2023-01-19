import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.onrender.com/api/subredexts/';

const setAuth = () => ({ Authorization: token });

export const getAllSubs = async () => {
	const { data } = await axios.get(baseURL);

	return data;
};

export const getPopularSubs = async (page) => {
	const { data } = await axios.get(baseURL + 'popular', {
		params: { page },
	});

	return data;
};

export const createSub = async (subredext) => {
	const { data } = await axios.post(baseURL, subredext, {
		headers: setAuth(),
	});

	return data;
};

export const editSub = async (link, description) => {
	const { data } = await axios.patch(
		baseURL + link,
		{ description },
		{
			headers: setAuth(),
		}
	);

	return data;
};
