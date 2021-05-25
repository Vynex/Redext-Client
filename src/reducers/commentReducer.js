import { newComment, destroyComment } from '../services/comments.js';
import { getComments } from '../services/feed.js';
import { getVotedComments, voteComment } from '../services/vote.js';
import addLeaf from '../utils/addLeaf.js';
import replaceBranch from '../utils/replaceBranch.js';
import replaceLeaf from '../utils/deleteComment.js';

const initialState = {
	data: [],
	voted: {
		upvoted: [],
		downvoted: [],
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_COMMENTS':
			return {
				data: action.data,
				voted: state.voted,
			};

		case 'EXTEND_COMMENTS':
			const newState = replaceBranch(
				state.data,
				action.payload.data,
				action.payload.id
			);
			state.data = [];

			return {
				data: [...state.data, ...newState],
				voted: state.voted,
			};

		case 'ADD_COMMENT':
			const addState = addLeaf(
				state.data,
				action.payload.data,
				action.payload.id
			);
			state.data = [];

			return {
				data: [...state.data, ...addState],
				voted: state.voted,
			};

		case 'DELETE_COMMENT':
			const deleteState = replaceLeaf(state.data, action.data);
			state.data = [];

			return {
				data: [...state.data, ...deleteState],
				voted: state.voted,
			};

		case 'UPVOTE_COMMENT':
			return {
				data: state.data,
				voted: {
					upvoted: [...state.voted.upvoted, action.data._id],
					downvoted: [...state.voted.downvoted],
				},
			};

		case 'DOWNVOTE_COMMENT':
			return {
				data: state.data,
				voted: {
					upvoted: [...state.voted.upvoted],
					downvoted: [...state.voted.downvoted, action.data._id],
				},
			};

		case 'UNVOTE_COMMENT':
			return {
				data: state.data,
				voted: {
					upvoted: [
						...state.voted.upvoted.filter((id) => id !== action.data._id),
					],
					downvoted: [
						...state.voted.downvoted.filter(
							(id) => id !== action.data._id
						),
					],
				},
			};

		case 'CLEAR_COMMENTS':
			return initialState;

		case 'SET_VOTED_COMMENTS':
			return {
				data: state.data,
				voted: action.data,
			};

		case 'CLEAR_VOTED_COMMENTS':
			return {
				data: state.data,
				voted: { upvoted: [], downvoted: [] },
			};

		default:
			return state;
	}
};

export const setComments = (pID, sort) => {
	return async (dispatch) => {
		const data = await getComments(pID, null, sort);

		dispatch({
			type: 'SET_COMMENTS',
			data,
		});
	};
};

export const extendComments = (pID, cID, sort) => {
	return async (dispatch) => {
		const data = await getComments(pID, cID, sort);

		dispatch({
			type: 'EXTEND_COMMENTS',
			payload: {
				id: cID,
				data,
			},
		});
	};
};

export const addComment = (pID, cID, content) => {
	return async (dispatch) => {
		const data = await newComment(pID, cID, content);

		dispatch({
			type: 'ADD_COMMENT',
			payload: {
				id: cID,
				data,
			},
		});
	};
};

export const deleteComment = (cID) => {
	return async (dispatch) => {
		const data = await destroyComment(cID);

		dispatch({
			type: 'DELETE_COMMENT',
			data,
		});
	};
};

export const addUpvoteComment = (id) => {
	return async (dispatch) => {
		const data = await voteComment(id, 1);

		dispatch({
			type: 'UPVOTE_COMMENT',
			data,
		});
	};
};

export const addDownvoteComment = (id) => {
	return async (dispatch) => {
		const data = await voteComment(id, -1);

		dispatch({
			type: 'DOWNVOTE_COMMENT',
			data,
		});
	};
};

export const removeVoteComment = (id) => {
	return async (dispatch) => {
		const data = await voteComment(id, 0);

		dispatch({
			type: 'UNVOTE_COMMENT',
			data,
		});
	};
};

export const clearComments = () => {
	return {
		type: 'CLEAR_COMMENTS',
	};
};

export const setVotedComments = (pID) => {
	return async (dispatch) => {
		const data = await getVotedComments(pID);

		dispatch({
			type: 'SET_VOTED_COMMENTS',
			data,
		});
	};
};

export const clearVotedComments = () => {
	return {
		type: 'CLEAR_VOTED_COMMENTS',
	};
};

export default reducer;
