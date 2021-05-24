import { getSubscribed, subscribeSub } from '../services/subredext.js';

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'INIT_SUBSCRIBED':
			return action.data;

		case 'CLEAR_SUBSCRIBED':
			return [];

		case 'ADD_SUBSCRIBED':
			return [...state, action.data];

		case 'REMOVE_SUBSCRIBED':
			return [...state.filter((subbed) => subbed._id !== action.data._id)];

		default:
			return state;
	}
};

export const initSubscribed = () => {
	return async (dispatch) => {
		const data = await getSubscribed();

		dispatch({
			type: 'INIT_SUBSCRIBED',
			data,
		});
	};
};

export const clearSubscribed = () => {
	return {
		type: 'CLEAR_SUBSCRIBED',
	};
};

export const newSubscribed = (id) => {
	return async (dispatch) => {
		const data = await subscribeSub(id, 1);

		dispatch({
			type: 'ADD_SUBSCRIBED',
			data,
		});
	};
};

export const removeSubscribed = (id) => {
	return async (dispatch) => {
		const data = await subscribeSub(id, -1);

		dispatch({
			type: 'REMOVE_SUBSCRIBED',
			data,
		});
	};
};

export default reducer;
