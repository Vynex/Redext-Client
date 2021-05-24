import axios from 'axios';

const baseURL = 'https://redext-api.herokuapp.com/api/profiles/';

export const getProfile = async (username) => {
	const { data } = await axios.get(baseURL, { params: { username } });

	return data;
};

export const getProfilePosts = async (username, page = 0) => {
	const { data } = await axios.get(baseURL + 'posts', {
		params: { username, page },
	});

	return data;
};

export const getProfileComments = async (username, page = 0) => {
	const { data } = await axios.get(baseURL + 'comments', {
		params: { username, page },
	});

	return data;
};
