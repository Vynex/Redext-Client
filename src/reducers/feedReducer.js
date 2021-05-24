import { getFeed } from '../services/feed.js';

const initialState = {
	count: 0,
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INIT_FEED':
			return action.payload;

		case 'EXTEND_FEED':
			return {
				count: state.count,
				data: [...state.data, ...action.data],
			};

		case 'CLEAR_FEED':
			return initialState;

		default:
			return state;
	}
};

export const initFeed = (scope, sort) => {
	return async (dispatch) => {
		const data = await getFeed(scope, sort);

		dispatch({
			type: 'INIT_FEED',
			payload: {
				count: data.count,
				data: data.data,
			},
		});
	};
};

export const extendFeed = (scope, sort, page) => {
	return async (dispatch) => {
		const data = await getFeed(scope, sort, page);

		dispatch({
			type: 'EXTEND_FEED',
			data: data.data,
		});
	};
};

export const clearFeed = () => {
	return {
		type: 'CLEAR_FEED',
	};
};

export default reducer;
