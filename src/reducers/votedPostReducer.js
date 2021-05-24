import { getVotedPosts, votePost } from '../services/vote';

const initialState = {
	upvoted: [],
	downvoted: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INIT_VOTED_POSTS':
			return {
				upvoted: action.payload.upvoted,
				downvoted: action.payload.downvoted,
			};

		case 'CLEAR_VOTED_POSTS':
			return initialState;

		case 'UPVOTE_POST':
			return {
				upvoted: [...state.upvoted, action.data._id],
				downvoted: [...state.downvoted],
			};

		case 'DOWNVOTE_POST':
			return {
				upvoted: [...state.upvoted],
				downvoted: [...state.downvoted, action.data._id],
			};

		case 'UNVOTE_POST':
			return {
				upvoted: [...state.upvoted.filter((id) => id !== action.data._id)],
				downvoted: [
					...state.downvoted.filter((id) => id !== action.data._id),
				],
			};

		default:
			return state;
	}
};

export const initVotedPost = () => {
	return async (dispatch) => {
		const data = await getVotedPosts();

		dispatch({
			type: 'INIT_VOTED_POSTS',
			payload: {
				upvoted: data.upvoted,
				downvoted: data.downvoted,
			},
		});
	};
};

export const clearVotedPost = () => {
	return {
		type: 'CLEAR_VOTED_POSTS',
	};
};

export const addUpvotePost = (id) => {
	return async (dispatch) => {
		const data = await votePost(id, 1);

		dispatch({
			type: 'UPVOTE_POST',
			data,
		});
	};
};

export const addDownvotePost = (id) => {
	return async (dispatch) => {
		const data = await votePost(id, -1);

		dispatch({
			type: 'DOWNVOTE_POST',
			data,
		});
	};
};

export const removeVotePost = (id) => {
	return async (dispatch) => {
		const data = await votePost(id, 0);

		dispatch({
			type: 'UNVOTE_POST',
			data,
		});
	};
};

export default reducer;
