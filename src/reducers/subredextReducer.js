import { getSubMeta } from '../services/subredext.js';
import { createSub, editSub } from '../services/subredexts.js';

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_SUBREDEXT':
			return action.data;

		case 'CLEAR_SUBREDEXT':
			return null;

		case 'ADD_SUBREDEXT':
			return action.data;

		case 'EDIT_SUBREDEXT':
			return action.data;

		default:
			return state;
	}
};

export const setSubredext = (link) => {
	return async (dispatch) => {
		const data = await getSubMeta(link);

		dispatch({
			type: 'SET_SUBREDEXT',
			data,
		});
	};
};

export const clearSubredext = () => {
	return {
		type: 'CLEAR_SUBREDEXT',
	};
};

export const newSubredext = (subredext) => {
	return async (dispatch) => {
		const data = await createSub(subredext);

		dispatch({
			type: 'ADD_SUBREDEXT',
			data,
		});
	};
};

export const editSubredext = (link, description) => {
	return async (dispatch) => {
		const data = await editSub(link, description);

		dispatch({
			type: 'EDIT_SUBREDEXT',
			data,
		});
	};
};

export default reducer;
