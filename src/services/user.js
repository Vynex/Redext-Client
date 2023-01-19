import axios from 'axios';
const baseURL = 'https://redext-api.onrender.com/api/';

export let token = null;

export const setToken = (newToken) => {
	token = `Bearer ${newToken}`;
};

export const login = async (credentials) => {
	const { data } = await axios.post(baseURL + 'login', credentials);

	return data;
};

export const register = async (credentials) => {
	const { data } = await axios.post(baseURL + 'register', credentials);

	return data;
};

export const getUser = async () => {
	const { data } = await axios.get(baseURL + 'me/info', {
		headers: { Authorization: token },
	});

	return data;
};
