import { getPopularSubs } from '../services/subredexts';

const initialState = {
	count: 0,
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_POPULAR':
			return action.payload;

		default:
			return state;
	}
};

export const setPopular = (page) => {
	return async (dispatch) => {
		const data = await getPopularSubs(page);

		dispatch({
			type: 'SET_POPULAR',
			payload: {
				count: data.count,
				data: data.data,
			},
		});
	};
};

export default reducer;
