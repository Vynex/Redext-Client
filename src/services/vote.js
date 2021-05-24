import axios from 'axios';
import { token } from './user.js';

const baseURL = 'https://redext-api.herokuapp.com/api/';

const setAuth = () => ({ Authorization: token });

export const getVotedPosts = async () => {
	const upvoted = await axios.get(baseURL + 'me/posts/upvoted', {
		headers: setAuth(),
	});

	const downvoted = await axios.get(baseURL + 'me/posts/downvoted', {
		headers: setAuth(),
	});

	return { upvoted: [...upvoted.data], downvoted: [...downvoted.data] };
};

export const getVotedComments = async (pID) => {
	const upvoted = await axios.get(baseURL + 'me/comments/upvoted', {
		headers: setAuth(),
		params: { pID },
	});

	const downvoted = await axios.get(baseURL + 'me/comments/downvoted', {
		headers: setAuth(),
		params: { pID },
	});

	return { upvoted: [...upvoted.data], downvoted: [...downvoted.data] };
};

export const votePost = async (id, dir) => {
	const { data } = await axios.post(
		baseURL + 'posts/vote',
		{ dir },
		{
			params: { pID: id },
			headers: setAuth(),
		}
	);

	return data;
};

export const voteComment = async (id, dir) => {
	const { data } = await axios.post(
		baseURL + 'comments/vote',
		{ dir },
		{ params: { cID: id }, headers: setAuth() }
	);

	return data;
};
