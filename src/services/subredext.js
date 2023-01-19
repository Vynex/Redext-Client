import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.onrender.com/api/subredexts/';

const setAuth = () => ({ Authorization: token });

export const getSubMeta = async (link) => {
	const { data } = await axios.get(baseURL + link);

	return data;
};

export const getSubscribed = async () => {
	const { data } = await axios.get(baseURL + 'subscribed', {
		headers: setAuth(),
	});

	return data;
};

export const subscribeSub = async (id) => {
	const query = {
		params: { id },
		headers: setAuth(),
	};

	const { data } = await axios.post(baseURL + 'subscribe', id, query);

	return data;
};
